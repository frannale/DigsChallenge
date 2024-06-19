import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query';

export const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: '', // This will be overriden by any api inject.
  }),
  { maxRetries: 3 },
);
