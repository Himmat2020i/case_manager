import Svg from "../assets/svg";

export interface ProfileInterface {
  id?: number;
  name?: string;
  label?: string;
  placeholder?: string;
  prefixIcon?: keyof typeof Svg;
  subfixIcon?: keyof typeof Svg;
}
