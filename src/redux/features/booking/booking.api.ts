/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/redux/api/api";
import { IBooking } from "@/types/booking";

const slotsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation<{ data: any }, IBooking>({
      query: (payload: IBooking) => {
        return {
          url: `/bookings`,
          body: payload,
          method: "POST",
        };
      },
      invalidatesTags: ["booking"],
    }),
  }),
});
export const { useCreateBookingMutation } = slotsApi;
