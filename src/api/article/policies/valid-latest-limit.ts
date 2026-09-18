import type { Core } from '@strapi/strapi';

export default (
  policyContext: Core.PolicyContext
) => {
  const rawLimit = policyContext.request.query.limit;

  if (!rawLimit) {
    return true;
  }

  if (Array.isArray(rawLimit)) {
    return false;
  }

  const limit = Number(rawLimit);

  if (!Number.isInteger(limit)) {
    return false;
  }

  return limit > 0 && limit <= 10;
};
