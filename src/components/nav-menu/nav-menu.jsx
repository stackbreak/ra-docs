import React from 'react';
import { Link } from 'gatsby';
// - - -
import { sections } from 'posts/sections';
// - - -
import css from './nav-menu.module.css';

/* STRUCTURE COMPOSER */

const getPostsByCategories = edges => {
  const categories = {};

  for (const item of edges) {
    const { node } = item;
    const { section } = node.fields;

    if (categories[section] === undefined) {
      categories[section] = [];
    }

    categories[section].push({
      url: node.fields.slug,
      title: node.frontmatter.title
    });
  }

  const postsByCategories = sections.map(section => ({
    name: section.name,
    posts: categories[section.folder]
  }));

  return postsByCategories;
};

/* RENDER */

export default ({ postEdges, currentSlug }) => {
  const postsByCategories = getPostsByCategories(postEdges);

  return (
    <nav className={css.container}>
      {postsByCategories.map(category => (
        <div className={css.category} key={category.name}>
          <div className={css.categoryName}>{category.name}</div>
          <ol className={css.subList}>
            {category.posts.map(post => (
              <li
                className={[
                  css.listItem,
                  currentSlug === post.url ? css.activeItem : undefined
                ].join(' ')}
                key={post.title}
              >
                <Link to={post.url}>{post.title}</Link>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </nav>
  );
};
