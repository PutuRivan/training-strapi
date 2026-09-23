/**
 * Public plural alias for the Awards single type.
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/awards',
      handler: 'award.find',
    },
  ],
};
