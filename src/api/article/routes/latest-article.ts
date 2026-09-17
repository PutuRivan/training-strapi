export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/actions/latest',
      handler: 'article.latest',
      config: {
        auth: false,
      },
    }
  ]
}