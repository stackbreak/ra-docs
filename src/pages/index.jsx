import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// - - -
import config from 'config';
import Layout from 'components/layout';
// import PostListing from 'components/post-listing';

export default ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <div>Hello</div>
      {/* <PostListing postEdges={postEdges} /> */}
    </Layout>
  );
};

export const query = graphql`
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
