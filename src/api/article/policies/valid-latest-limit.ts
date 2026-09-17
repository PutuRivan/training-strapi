import type { Core } from '@strapi/strapi';

export default (
  policyContext: Core.PolicyContext
) => {
  const rawLimit = policyContext.request.query.limit;

  if (!rawLimit) {
    return true;
  }

  const limit = Number(rawLimit);

  if (Number.isNaN(limit)) {
    return false;
  }

  return limit > 0 && limit <= 10;
};