---
title: 'Nonamed Post Example'
date: '2018-09-29'
---

## Test Header

**Markdown** is a better way to write `HTML`, without all the complexities and ugliness that usually accompanies it.

Some of the key benefits are:

1. Markdown is simple to learn, with minimal extra characters so it’s also quicker to write content.
1. Less chance of errors when writing in markdown.
1. Produces valid XHTML output.
1. Keeps the content and the visual display separate, so you cannot mess up the look of your site.
1. Write in any text editor or Markdown application you like.
1. Markdown is a joy to use!


John Gruber, the author of Markdown, puts it like this:

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. While Markdown’s syntax has been influenced by several existing text-to-HTML filters, the single biggest source of inspiration for Markdown’s syntax is the format of plain text email.

### Some Header 3 Level

#### Table Example

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |


## Code Sample

```jsx
import React from 'react';
import { Link } from 'gatsby';

import { sections } from 'posts/sections';

import css from './nav-menu.module.css';



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
```

## Image Sample

![Some Image](../../media/uns.jpg)
