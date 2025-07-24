import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginFormSchema } from "../../../helper/yupHelper";
import { LoginInterface } from "../../../constants/logInConstants";

const useLogin = () => {
  const { control, handleSubmit } = useForm<LoginInterface>({
    resolver: loginFormSchema
  });
  const navigate = useNavigate();

  const onLoginPress = () => {
    navigate("/dashboard");
  };

  return {
    control,
    navigate,
    onLoginPress,
    handleSubmit
  };
};
export default useLogin;
