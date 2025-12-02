import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { DropdownControllerProps } from "../interface/dropdownInterface";

const DropdownController = <T extends FieldValues>({
  name,
  control
}: DropdownControllerProps<T>) => {
  return (
    <div className="mb-3">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>{error && <ErrorMessage message={error?.message} />}</>
        )}
      />
    </div>
  );
};

export default DropdownController;
