import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const RTKTags = {
  Events: 'Events',
};

export const RTKTagsAsArray = [RTKTags.Events];

export const api = createApi({
  reducerPath: 'api',
  tagTypes: RTKTagsAsArray,
  baseQuery,
  /**
   * By default the invalidation Cache time is 60 seg.
   */
  keepUnusedDataFor: 60,
  /**
   * Re-validate all data when user comes from off-line mode.
   */
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
