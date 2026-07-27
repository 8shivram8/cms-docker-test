import { configureStore } from "@reduxjs/toolkit";
import { cpcrmApi } from "../new components/payment/cpcrm.api";

export const store = configureStore({
  reducer: {
    [cpcrmApi.reducerPath]: cpcrmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cpcrmApi.middleware),
});
