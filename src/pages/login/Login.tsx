import React from "react";
import useLogin from "./hooks/useLogin";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import TextInputController from "../../controller/TextInputController";

const Login = () => {
  const { control, handleSubmit, onLoginPress } = useLogin();

  return (
    <div id="auth">
      <div className="row mt-5">
        <div className="offset-lg-3 col-lg-6 col-12">
          <div className="card shadow-lg justify-content-center align-self-center">
            <div id="auth-login">
              <div className="card-header">
                <h2 className="auth-title text-center">Case Manager</h2>
                <p className="auth-subtitle">Please Login with your email address and password</p>
              </div>
              <div className="card-content">
                <div className="card-body">
                  <Form
                    noValidate
                    method="POST"
                    id="formLogin"
                    className="mb-3"
                    onSubmit={handleSubmit(onLoginPress)}>
                    <TextInputController
                      name="email"
                      control={control}
                      placeholder="Enter the email"
                    />
                    <TextInputController
                      name="password"
                      control={control}
                      type={"password"}
                      placeholder="Enter the password"
                    />
                    <Button type="submit" className="btn-block btn-lg shadow-lg">
                      Login
                    </Button>
                  </Form>
                  <div className="text-center text-lg fs-4">
                    <p>
                      <Link to="/forgot-password" className="font-bold">
                        Forgot password?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
