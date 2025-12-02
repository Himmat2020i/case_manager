import { axiosBaseQuery } from "../redux/reduxUtils";
import { AUTH_URLS } from "../constants/urlConstants";
import { createApi } from "@reduxjs/toolkit/query/react";
import { LogInUserFrom } from "../interface/loginInterface";

const authApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "auth",
  endpoints: (builder) => ({
    login: builder.mutation<unknown, LogInUserFrom>({
      query: (data) => {
        return {
          url: AUTH_URLS.login,
          method: "POST",
          data
        };
      }
    })
  })
});

export const { useLoginMutation } = authApi;

export default authApi;
