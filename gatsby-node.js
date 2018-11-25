const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

/* WEBPACK */

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

/* PIPE */

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const filePath = createFilePath({ node, getNode, basePath: `posts` });
    const splitedPath = filePath.split('/');

    const slug = `${splitedPath[1]}/${splitedPath[2].slice(4)}`;
    const order = splitedPath[2].substr(0, 2);
    const section = splitedPath[1];

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
    createNodeField({
      node,
      name: 'order',
      value: order
    });
    createNodeField({
      node,
      name: 'section',
      value: section
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve('src/templates/post.jsx');

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug
            }
          });
        });
      })
    );
  });
};
