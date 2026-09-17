import type { Core } from '@strapi/strapi';
import { errors } from '@strapi/utils';
const { ApplicationError } = errors;

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    strapi.documents.use(async (context, next) => {
      if (context.uid !== 'api::category.category') {
        return next();
      }

      // Middleware ini hanya dijalankan ketika delete
      if (context.action !== 'delete') {
        return next();
      }

      const documentId = context.params?.documentId;

      if (!documentId) {
        return next();
      }

      // Cari article yang masih menggunakan category
      const articles = await strapi
        .documents('api::article.article')
        .findMany({
          filters: {
            category: {
              documentId: {
                $eq: documentId,
              },
            },
          },
          limit: 1,
        });

      // Kalau masih ada article yang menggunakan category,
      // hentikan proses delete
      if (articles.length > 0) {
        throw new ApplicationError(
          'Category cannot be deleted because it is still used by an article.'
        );
      }

      // Tidak digunakan Article → delete boleh dilanjutkan
      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) { },
};
