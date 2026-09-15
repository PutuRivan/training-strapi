/**
 * `request-logger` middleware
 */

import type { Core } from '@strapi/strapi';

const requestLogger: Core.MiddlewareFactory = (_config, { strapi }) => {
  return async (ctx, next) => {
    const startTime = Date.now();

    await next()

    if (!ctx.path.startsWith('/api')) {
      return
    }

    const duration = Date.now() - startTime;
    const userId = ctx.state.user?.id ?? "public";

    strapi.log.info(
      [
        "[API]",
        ctx.method,
        ctx.path,
        `status=${ctx.status}`,
        `duration=${duration}ms`,
        `user=${userId}`,
        `ip=${ctx.ip}`,
      ].join(" | "),
    );
  };
};

export default requestLogger;
