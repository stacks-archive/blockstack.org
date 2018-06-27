import React from "react";

import './ButtonList.scss';

export default function ButtonList({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="button-list">
        <h1>Button List Yo</h1>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="button-list-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>
  );
}
