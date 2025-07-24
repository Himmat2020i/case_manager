import { useForm } from "react-hook-form";

const useProfile = () => {
  const { control } = useForm();

  return {
    control
  };
};
export default useProfile;
