import React from "react";

import './ButtonList.scss';

export default function ButtonList({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="md-button-list-template">
      <section className="blue-bg top-section top-area">
        <div className="container pb-margin align-center">
          <h1 className="h4">{frontmatter.title}</h1>
          {frontmatter.description ? (
            <div>
              <div className="h4 py-2">---</div>
              <h2 className="h4">{frontmatter.description}</h2>
            </div>
          ) : false}
        </div>
      </section>
      <section>
        <div className="container py-margin">
          <div
            className="md-content align-center"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </div>
  );
}
