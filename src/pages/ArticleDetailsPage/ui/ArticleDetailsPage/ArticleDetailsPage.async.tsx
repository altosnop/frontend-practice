import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
    })
);
