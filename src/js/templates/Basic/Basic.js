import React from "react";

import './Basic.scss';

export default function Basic({data}) {

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <section className="blue-bg top-section top-area">
        <div className="container py-margin">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.description}</h2>
        </div>
      </section>
      <section>
        <div className="container">
          <div
            className="content rich-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </div>
  );
}

