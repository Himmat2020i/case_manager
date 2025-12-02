import get from "lodash/get";
import { ApiError, FormattedError } from "../interface/apiInterface";

export const getApiError = (error: ApiError): FormattedError | null => {
  const resStatus = get(error, "response.status", 0);
  const allowedStatuses = [500, 400, 404];
  if (!allowedStatuses.includes(resStatus)) {
    return null;
  }
  const data = error.response?.data;
  const message =
    data?.message || data?.error || data?.errors?.[0]?.message || "Something went wrong";

  return {
    message,
    status: resStatus
  };
};
