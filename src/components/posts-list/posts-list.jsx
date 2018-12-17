/* ========================================================================== */
/*                               ALL POSTS LIST                               */
/* ========================================================================== */

import React from 'react';
import { Link } from 'gatsby';

import css from './posts-list.module.css';

///

export default class extends React.Component {
  getDateView(timestamp) {
    return new Date(Number(timestamp)).toLocaleDateString();
  }

  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        url: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className={css.list}>
        <h1>All posts</h1>
        {postList.map(post => (
          <div className={css.item} key={post.url}>
            <Link to={post.url}>
              <h4 className={css.link}>{post.title}</h4>
            </Link>
            <h6 className={css.date}>{this.getDateView(post.date)}</h6>
          </div>
        ))}
      </div>
    );
  }
}
