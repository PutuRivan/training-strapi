/**
 * article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::article.article',
  ({ strapi }) => ({
    async latest(ctx) {
      const rawLimit = ctx.query.limit;
      const limit = rawLimit ? Number(rawLimit) : 5;

      if (Number.isNaN(limit) || limit <= 0) {
        return ctx.badRequest('Limit must be a positive number');
      }

      const articles = await strapi
        .service('api::article.article')
        .findLatest(limit);

      ctx.body = {
        data: articles,
      };
    }
  })
);
