import Login from "../pages/login/Login";
import CaseList from "../pages/case/CaseList";
import Profile from "../pages/profile/Profile";
import { Route, Routes } from "react-router-dom";
import React, { Suspense, useState } from "react";
import Loading from "../components/loading/Loading";
import Dashboard from "../pages/dashboard/Dashboard";
import { googleCapcha } from "../helpers/configService";
import AdminLayout from "../pages/adminLayout/AdminLayout";
import FrontLayout from "../pages/frontLayout/FrontLayout";
import RoleBasedRedirect from "../components/rolls/rollbase";
import ChangePassword from "../pages/changePassword/ChangePassword";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import VerifyAccount from "../pages/otpVerification/OTPVerification";
import ForgetPassword from "../pages/forgot-password/ForgotPassword";

export default function AppRoutes() {
  const [role, setRole] = useState("");

  return (
    <Routes>
      <Route index element={<RoleBasedRedirect role={role} />} />
      <Route element={<FrontLayout />}>
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <GoogleReCaptchaProvider
                reCaptchaKey={googleCapcha}
                scriptProps={{ defer: true, async: true }}>
                <Login />
              </GoogleReCaptchaProvider>
            </Suspense>
          }
        />

        <Route
          path="verify-account"
          element={
            <Suspense fallback={<Loading />}>
              <GoogleReCaptchaProvider
                reCaptchaKey={googleCapcha}
                scriptProps={{ defer: true, async: true }}>
                <VerifyAccount />
              </GoogleReCaptchaProvider>
            </Suspense>
          }
        />

        <Route
          path="forgot-password"
          element={
            <Suspense fallback={<Loading />}>
              <GoogleReCaptchaProvider
                reCaptchaKey={googleCapcha}
                scriptProps={{ defer: true, async: true }}>
                <ForgetPassword />
              </GoogleReCaptchaProvider>
            </Suspense>
          }
        />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="authority/caselist" element={<AdminLayout />}>
        <Route index element={<CaseList />} />
      </Route>
    </Routes>
  );
}
