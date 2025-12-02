import Svg from "../assets/svg";
import { FormControlProps } from "react-bootstrap";
import { Control, FieldValues, Path } from "react-hook-form";

export interface InputPropsInterface extends Partial<FormControlProps> {
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onClick?: () => void;
  prefixIcon?: keyof typeof Svg;
  subfixIcon?: keyof typeof Svg;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type DropdownControllerProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
} & Omit<InputPropsInterface, "name" | "value" | "onChange" | "placeholder">;
