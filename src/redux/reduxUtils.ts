import { axiosInstance } from "../helpers/api";
import { getApiError } from "../helpers/errorHandler";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, type AxiosRequestConfig } from "axios";
import { showToaster, startLoader, stopLoader } from "../helpers/utils";
import { ApiSuccess, FormattedError, ApiErrorResponse } from "../interface/apiInterface";

export interface AxiosBaseQueryArgs {
  url: string;
  data?: unknown;
  params?: unknown;
  silent?: boolean;
  baseURL?: string;
  showSuccessToaster?: boolean;
  headers?: Record<string, string>;
  method: AxiosRequestConfig["method"];
  onUploadProgress?: AxiosRequestConfig["onUploadProgress"];
  transformRequest?: AxiosRequestConfig["transformRequest"];
  transformResponse?: AxiosRequestConfig["transformResponse"];
}

export const axiosBaseQuery =
  (customBaseUrl?: string): BaseQueryFn<AxiosBaseQueryArgs, ApiSuccess, FormattedError> =>
  async (args) => {
    const {
      url,
      method,
      data,
      params,
      headers,
      baseURL,
      silent,
      transformRequest,
      transformResponse,
      onUploadProgress,
      showSuccessToaster
    } = args;

    try {
      if (!silent) startLoader();

      const response = await axiosInstance({
        url,
        method,
        data,
        params,
        headers,
        baseURL: customBaseUrl || baseURL,
        transformRequest,
        transformResponse,
        onUploadProgress
      });

      const success: ApiSuccess = {
        data: response.data?.data ?? response.data,
        status: response.status
      };

      if (showSuccessToaster && response.data?.message) {
        showToaster(response.data.message, "S");
      }

      return { data: success };
    } catch (err) {
      const axiosErr = err as AxiosError<ApiErrorResponse>;
      const formatted = getApiError(axiosErr);

      if (!silent && formatted?.message) {
        showToaster(formatted.message, "E");
      }

      return {
        error: formatted ?? {
          message: "Unknown error",
          status: axiosErr.response?.status ?? 0
        }
      };
    } finally {
      if (!silent) stopLoader();
    }
  };
