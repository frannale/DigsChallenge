import type { ChallengeData } from '@/app/models/ChallengeData';

import { api } from '../../api';

export const matchesApi = api.injectEndpoints({
  endpoints: builder => ({
    getEvents: builder.query<ChallengeData, object>({
      query: () => ({
        url: `${process.env.EXPO_PUBLIC_API_URL}interview/api/v1/challenge`,
        method: 'GET',
      }),
      providesTags: ['Events'],
    }),
  }),
});

export const { useGetEventsQuery } = matchesApi;
