export interface ApiErrorResponse {
  message?: string;
  error?: string;
  errors?: Array<{ message?: string }>;
  [key: string]: unknown;
}

export interface ApiError {
  response?: {
    status?: number;
    data?: ApiErrorResponse;
  };
}

export interface FormattedError {
  message: string;
  status: number;
}

export interface ApiSuccess<T = unknown> {
  data: T;
  status: number;
}
