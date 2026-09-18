export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/actions/:documentId/summary',
      handler: 'article.summary',
      config: {
        auth: false,
      },
    },
  ],
};
