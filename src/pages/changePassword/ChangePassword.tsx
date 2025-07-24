import React, { useCallback } from "react";
import { Form, Button } from "react-bootstrap";
import useChangePassword from "./hooks/useChangePassword";
import TextInputController from "../../controller/TextInputController";

const ChangePassword = () => {
  const { control } = useChangePassword();

  const renderItem = useCallback(
    (name, placeholder) => {
      return (
        <TextInputController
          name={name}
          control={control}
          type={"password"}
          prefixIcon={"LockIcon"}
          placeholder={placeholder}
        />
      );
    },
    [control]
  );

  return (
    <>
      <div id="auth">
        <div className="row h-100">
          <div className="offset-lg-3 col-lg-6 col-12">
            <div id="auth-login">
              <h1 className="auth-title">Change Password</h1>
              <p className="auth-subtitle mb-5">You can change your password here</p>
              <Form
                id="formChangePassword"
                className="mb-3 "
                method="POST"
                onSubmit={() => {}}
                noValidate>
                {renderItem("currentPassword", "Enter the Current Password")}
                <div className="form-group mt-4 mb-4">
                  <hr />
                </div>
                {renderItem("newPassword", "Enter the New Password")}
                {renderItem("confirmNewPassword", "Enter the Confirm Password")}
                <Button className="btn-block btn-lg shadow-lg" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
