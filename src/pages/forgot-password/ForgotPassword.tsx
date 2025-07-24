import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import TextInputController from "../../controller/TextInputController";

const ForgetPassword = () => {
  const { control } = useForm();

  return (
    <div id="auth">
      <div className="row match-height">
        <div className="col-12">
          <div className="card shadow-lg">
            <div id="auth-forgot-password">
              <div className="card-header">
                <h2 className="auth-title text-center">Forgot Password</h2>
                <p className="auth-subtitle mb-2">
                  Enter your email and send you instructions to reset your password.
                </p>
              </div>
              <div className="card-content">
                <div className="card-body">
                  <Form
                    id="forgetPassword"
                    className="mb-3"
                    method="POST"
                    onSubmit={() => {}}
                    noValidate>
                    <TextInputController
                      name="email"
                      control={control}
                      prefixIcon={"LockIcon"}
                      placeholder="Enter the email"
                    />
                    <Button className="btn-block btn-lg shadow-lg" type="submit">
                      Send Reset Link
                    </Button>
                  </Form>
                  <div className="text-center mt-5 text-lg fs-4">
                    <p className="text-gray-600">
                      Back to
                      <Link to="/" className="font-bold ms-2">
                        Login
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

export default ForgetPassword;
