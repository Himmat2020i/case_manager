export interface LogInParams {
  email: string;
  password: string;
  isMobile?: boolean;
  returnUrl?: string;
  "g-recaptcha-response"?: string;
}

export interface LogInUserFrom {
  email: string;
  password: string;
  "g-recaptcha-response"?: string | undefined | null;
}
