import { useForm } from "react-hook-form";

const useLogin = () => {
  const { control } = useForm();

  return {
    control
  };
};
export default useLogin;
