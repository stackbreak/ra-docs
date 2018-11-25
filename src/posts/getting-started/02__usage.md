---
title: 'Usage Guide'
date: '2018-11-02'
---

## Start dev-server

```sh
npm run start
```

This command run local development server with hot-reloading on files changes.

You can access this server at http://localhost:4000

> If you want to change port, you can do this by editing `package.json` **scripts** section.

## GraphiQL

Besides dev-server on root URL, you can access **GraphiQL** _(GraphQL integrated development environment)_ on special URL: http://localhost:4000/___graphql.

This tool is provided by [GatsbyJS](https://www.gatsbyjs.org/tutorial/part-five/), and could be very usefull in output customization cases.

## Structure

Project have some rules of pages organization.

First of all, look at the `src` directory and what it contains:

```sh
src
├── components
├── config.js
├── media
├── pages
├── posts
└── templates
```

* **`components`** - contains React components, building blocks for application.
* **`media`** - media content _(like images)_ store for posts.
* **`pages`** - сustom pages with own routes, builded with components.
* **`templates`** - page wrappers for inject data, extracted from markdown posts.
* **`posts`** - contains posts, divided by sections.

## Sections

```sh
src/posts
├── common
├── getting-started
├── mobile
├── ramail7
└── sections.js
```

Every directory is a section. Name of every section append to URL of posts contained inside.

You need to set order and display name to folders in `sections.js` for sidebar menu autogeneration.

```js
export const sections = [
  { folder: 'getting-started', name: 'Getting Started' },
  { folder: 'examples', name: 'Some Section' }
];
```

## Posts

Every section have to contain ordered list of markdown files.

```sh
src/posts/getting-started
├── 01__install.md
├── 02__usage.md
└── ...
```

Post title and date are set in header of post.

```md
---
title: 'Usage Guide'
date: '2018-11-02'
---
```

All posts composed into sections on autogeneration stage.

