import React from "react";

import './Basic.scss';

export default function Basic({data}) {

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.description}</h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>
  );
}

