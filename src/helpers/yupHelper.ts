/* eslint-disable no-control-regex */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { REQUIRED, VALID } from "../constants/yupConstants";

export const loginFormSchema = yupResolver(
  yup
    .object({
      email: yup.string().email(VALID.email).required(REQUIRED.email),
      password: yup
        .string()
        .trim()
        .required(REQUIRED.password)
        .matches(/^[\x00-\x7F]+$/, VALID.password),
      "g-recaptcha-response": yup
        .string()
        .nullable()
        .notRequired()
        .transform((value) => (value === "" ? null : value))
    })
    .required()
);
