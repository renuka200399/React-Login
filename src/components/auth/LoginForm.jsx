import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthTabs from "./AuthTabs";
import EmailLogin from "./EmailLogin";
import PhoneLogin from "./PhoneLogin";
import Button from "../common/Button";

function LoginForm() {
  const [activeTab, setActiveTab] = useState("Email");

  const navigate = useNavigate();

  const handleLogin = () => {
    // Later we'll add validation and API call here
    navigate("/home");
  };

  return (
    <>
      {/* Login Tabs */}
      <AuthTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Dynamic Login Form */}
      <div className="mt-6">
        {activeTab === "Email" && <EmailLogin />}

        {activeTab === "Phone" && <PhoneLogin />}
      </div>

      {/* Forgot Password */}
      <div className="text-right mt-3">
        <button className="text-blue-600 text-sm hover:underline">
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <div className="mt-5">
        <Button onClick={handleLogin}>
          Login
        </Button>
      </div>
    </>
  );
}

export default LoginForm;