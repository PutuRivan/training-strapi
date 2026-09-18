/**
 * article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::article.article',
  ({ strapi }) => ({
    async latest(ctx) {
      const rawLimit = ctx.query.limit;
      const limit = rawLimit === undefined ? 5 : Number(rawLimit);

      if (!Number.isInteger(limit) || limit <= 0 || limit > 10) {
        return ctx.badRequest('Limit must be an integer between 1 and 10');
      }

      const articles = await strapi
        .service('api::article.article')
        .findLatest(limit);

      ctx.body = {
        data: articles,
      };
    },

    async summary(ctx) {
      const { documentId } = ctx.params;

      if (typeof documentId !== 'string' || documentId.trim().length === 0) {
        return ctx.badRequest('A valid article documentId is required');
      }

      const article = await strapi
        .service('api::article.article')
        .findSummary(documentId);

      if (!article) {
        return ctx.notFound('Published article was not found');
      }

      ctx.body = {
        data: article,
      };
    },
  })
);
