import { useForm } from "react-hook-form";

const useChangePassword = () => {
  const { control } = useForm({
    mode: "onChange"
  });
  return { control };
};

export default useChangePassword;
