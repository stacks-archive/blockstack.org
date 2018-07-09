let Parser = require('rss-parser');
const crypto = require('crypto');

let parser = new Parser();

const createContentDigest = obj => crypto.createHash('md5').update(JSON.stringify(obj)).digest('hex');

function promisifiedParseURL(url) {
  return new Promise((resolve, reject) => {
    parser.parseURL(url).then((data) => {
      console.log(data.feed);
      resolve(data);
    }).catch( (err) => {
      reject(err);
    });
  });
}

const createChildren = (entries, parentId, createNode) => {
  const childIds = [];
  entries.forEach(entry => {
    childIds.push(entry.link);
    const node = Object.assign({}, entry, {
      id: entry.link,
      title: entry.title,
      link: entry.link,
      description: entry.description,
      parent: parentId,
      children: []
    });
    node.internal = {
      type: 'rssFeedItem',
      contentDigest: createContentDigest(node)
    };

    createNode(node);
  });
  return childIds;
};

async function sourceNodes({ boundActionCreators }, { rssURL }) {
  const { createNode } = boundActionCreators;
  const data = await promisifiedParseURL(rssURL);
  if (!data) {
    return;
  }
  console.log(Object.keys(data));
  const { title, description, link, items } = data;
  const childrenIds = createChildren(items, link, createNode);
  const feedStory = {
    id: link,
    title,
    description,
    link,
    parent: null,
    children: childrenIds
  };

  feedStory.internal = { type: 'rssFeed', contentDigest: createContentDigest(feedStory) };

  console.log('create');
  console.log(feedStory);
  createNode(feedStory);
}

console.log(sourceNodes);

exports.sourceNodes = sourceNodes;

