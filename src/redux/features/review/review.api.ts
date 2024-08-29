import { api } from "@/redux/api/api";
import { IReview } from "@/types/review";

const reviewAPi = api.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (post) => ({
        url: "/review/create",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["review"],
    }),
    getReviews: builder.query<{ data: IReview[] }, number>({
      query: (limit?: number) => ({
        url: `/review/get?limit=${limit || 2}`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),
  }),
});
export const { useCreateReviewMutation, useGetReviewsQuery } = reviewAPi;