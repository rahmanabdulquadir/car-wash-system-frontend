import { api } from "@/redux/api/api";

const userRelatedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateUserInfo: builder.mutation({
      query: (payload) => ({
        url: "/user/update",
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserImage: builder.mutation<{ data: string }, FormData>({
      query: (file) => ({
        url: `/user/update-profile-image`,
        method: "PUT",
        body: file,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const { useUpdateUserInfoMutation, useUpdateUserImageMutation } =
  userRelatedApi;