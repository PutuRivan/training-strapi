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
        fields: ['title', 'slug', 'date'],
        sort: ['date:desc', 'title:asc'],
        limit: safeLimit,
      });
    },

    async findSummary(documentId: string) {
      return await strapi.documents('api::article.article').findOne({
        documentId,
        status: 'published',
        fields: ['title', 'slug', 'date'],
        populate: {
          category: {
            fields: ['name', 'slug'],
          },
          tags: {
            fields: ['name', 'slug'],
          },
        },
      });
    },
  })
);
