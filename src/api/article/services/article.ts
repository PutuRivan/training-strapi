/**
 * article service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService(
  'api::article.article',
  ({ strapi }) => ({
    async findLatest(limit: number) {
      const safeLimit = Math.min(limit, 10);

      return await strapi.documents('api::article.article').findMany({
        status: 'published',
        sort: ['date:desc'],
        limit: safeLimit,
      });
    },
  })
);
