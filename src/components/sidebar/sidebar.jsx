import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// - - -
import { Header } from 'components/header';
import { NavMenu } from 'components/nav-menu';
// - - -
import css from './sidebar.module.css';

const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [fields___section, fields___order] }) {
      edges {
        node {
          fields {
            slug
            order
            section
          }
          frontmatter {
            title
            date(formatString: "x")
          }
        }
      }
    }
  }
`;

const injectToRender = currentSlug => data => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <aside className={css.container}>
      <Header />
      <NavMenu currentSlug={currentSlug} postEdges={postEdges} />
    </aside>
  );
};

export default ({ currentSlug }) => (
  <StaticQuery query={query} render={injectToRender(currentSlug)} />
);
