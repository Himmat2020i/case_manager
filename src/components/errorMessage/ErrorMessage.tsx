import React from "react";

interface Props {
  message?: string;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <span
      style={{
        fontSize: 14
      }}
      className="text-danger">
      {message}
    </span>
  );
};

export default ErrorMessage;
