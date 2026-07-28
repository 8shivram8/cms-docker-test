import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BACKEND_URL = "https://api.acolead.com/crm-backend/api";
// export const BACKEND_URL = "http://localhost:4104/crm-backend/api";

export const cpcrmApi = createApi({
  reducerPath: "cpcrmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
  }),
  endpoints: (builder) => ({
    checkLicensePaymentStatus: builder.query({
      query: ({ cpId, merchantOrderId }) => ({
        url: "/v1/auth/status",
        params: { cpId, merchantOrderId },
      }),
    }),
    sendOtp: builder.mutation({
      query: ({ body }) => ({
        url: "/v1/auth/website/send-otp",
        method: "POST",
        body
      }),
    }),
    resendOtp: builder.mutation({
      query: ({ body }) => ({
        url: "/v1/auth/website/resend-otp",
        method: "POST",
        body
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ body }) => ({
        url: "/v1/auth/website/verify-otp",
        method: "POST",
        body
      }),
    }),
  }),
});
