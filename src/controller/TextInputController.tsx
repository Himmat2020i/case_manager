import React from "react";
import InputText from "../components/inputText/inputText";
import { Controller, FieldValues } from "react-hook-form";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { TextInputControllerProps } from "../interface/inputTextInterface";

const TextInputController = <T extends FieldValues>(props: TextInputControllerProps<T>) => {
  const { name, control, placeholder, ...prop } = props;
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
              {...prop}
            />
            {error && <ErrorMessage message={error?.message} />}
          </>
        )}
      />
    </div>
  );
};

export default TextInputController;
