import React from "react";
import useLogin from "./hooks/useLogin";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  useLogin();
  return(
    <div id="auth" className="max-width">
      <div className="row match-height">
        <div className="offset-lg-4 col-lg-4 col-12">
          <div className="card shadow-lg justify-content-center align-self-center">
            <div id="auth-login">
              <div className="card-header">
                <h2 className="auth-title text-center">Case Manager</h2>
                <p className="auth-subtitle">Please Login with your email address and password</p>
              </div>

              <div className="card-content">
                <div className="card-body">
                  <Form
                    id="formLogin"
                    className="mb-3 "
                    method="POST"
                    onSubmit={()=> {}}
                    noValidate>
                    {/* {errorMessage && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          <i className="pi pi-exclamation-triangle me-2"></i>
                          {errorMessage}
                        </div>
                      </div>
                    )} */}
                    <div className="form-group position-relative has-icon-left mb-4">
                      <Form.Control
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Email-id"
                        className="form-control-xl "
                      />
                      <div className="form-control-icon">
                        <i className="pi pi-user"></i>
                      </div>
                    </div>
                    <div className="form-group position-relative has-icon-left mb-4">
                      <Form.Control
                        id="password"
                        name="passwored"
                        type={"password"}
                        placeholder="******"
                        className="form-control-xl "
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          
                        </span>
                      </div>
                      

                      <div className="form-control-icon">
                        <i className="pi pi-lock"></i>
                      </div>
                    </div>
                    <Button
                      className="btn-block btn-lg shadow-lg"
                      type="submit"
                      disabled={true}>
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
}
export default Login;