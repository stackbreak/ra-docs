import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// - - -
import { Layout } from 'components/layout';
import config from 'config';
// - - -
import './prism-theme.css';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <Layout currentSlug={slug}>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`;
