import React from "react";
import InputText from "../components/inputText/inputText";
import { Controller, FieldValues } from "react-hook-form";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { TextInputControllerProps } from "../interface/inputTextInterface";

const TextInputController = <T extends FieldValues>({
  name,
  control,
  placeholder,
  ...props
}: TextInputControllerProps<T>) => {
  return (
    <div className="mb-3">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <InputText
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              {...props}
            />
            {error && <ErrorMessage message={error?.message} />}
          </>
        )}
      />
    </div>
  );
};

export default TextInputController;
