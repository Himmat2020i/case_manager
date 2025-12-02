import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Resolver, useForm } from "react-hook-form";
import { loginFormSchema } from "../../../helpers/yupHelper";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { LogInUserFrom } from "../../../interface/loginInterface";
import { useLoginMutation } from "../../../services/authService";

const useLogin = () => {
  const { control, getValues, setValue } = useForm<LogInUserFrom>({
    resolver: loginFormSchema as Resolver<LogInUserFrom>
  });
  const [getLogIn, { data }] = useLoginMutation();
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onLoginPress = () => {
    navigate("/dashboard");
    // if (!executeRecaptcha) {
    //   return;
    // }
    // const token = await executeRecaptcha("login_action");
    // setValue("g-recaptcha-response", token);
    // getLogIn(getValues());
  };

  useEffect(() => {
    if (data) console.log("-------->> ", data);
  }, []);

  return {
    control,
    navigate,
    onLoginPress
  };
};
export default useLogin;
