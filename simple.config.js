export default {
  site: {
    title: 'Simple Engine',
    url: 'https://simpleengine.com',
    description:
      'A seriously simple static site generator — Markdown, Tailwind CSS v4, and Vite.',
    author: 'Christopher Casper',
    language: 'en',
  },
  paths: {
    content: './content',
    layouts: './layouts',
    output: './dist',
    styles: './styles',
    static: './public',
  },
  collections: {
    posts: {
      pattern: 'blog/**/*.md',
      sortBy: 'date',
      reverse: true,
    },
    docs: {
      pattern: 'docs/**/*.md',
      sortBy: 'order',
    },
  },
  seo: {
    sitemap: true,
    rss: true,
    robots: true,
    llmsTxt: true,
    llmsFull: true,
    rawMarkdown: true,
    jsonLd: true,
    aiCrawlers: {
      allow: true,
    },
  },
  markdown: {
    options: {
      html: true,
      linkify: true,
      typographer: true,
    },
    shiki: {
      theme: 'github-dark',
    },
  },
  dev: {
    port: 3000,
    open: false,
  },
};
