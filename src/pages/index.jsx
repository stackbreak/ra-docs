/* ========================================================================== */
/*                               APP ENTRY POINT                              */
/* ========================================================================== */

import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import config from 'config';
import Layout from 'components/layout/layout';
import { PostsList } from 'components/posts-list';

///

export default ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <PostsList postEdges={postEdges} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
