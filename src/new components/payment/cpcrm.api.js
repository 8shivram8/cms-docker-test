import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BACKEND_URL = "https://api.stage.acolead.com/crm-backend/api";
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
        params: {
          cpId,
          merchantOrderId,
        },
      }),
    }),

    createGuestAddonLicense: builder.mutation({
      query: (body) => ({
        url: "/v1/auth/create-license",
        method: "POST",
        body,
      }),
    }),

    // 👇 Add this HERE
    getAdminCps: builder.query({
      query: ({ page, limit, token }) => ({
        url: `/v2/admin/cps?page=${page}&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useCheckLicensePaymentStatusQuery,
  useCreateGuestAddonLicenseMutation,
  useGetAdminCpsQuery,
} = cpcrmApi;
