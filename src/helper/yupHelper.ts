import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordRegex, REQUIRED, VALID } from "../constants/yupConstants";

export const loginFormSchema = yupResolver(
  yup
    .object({
      email: yup.string().email(VALID.email).required(REQUIRED.email),
      password: yup
        .string()
        .trim()
        .required(REQUIRED.password)
        .min(8, VALID.passLimit)
        .matches(passwordRegex, VALID.specialChar)
    })
    .required()
);
