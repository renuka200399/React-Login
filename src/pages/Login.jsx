import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold text-center">
        Welcome Back 👋
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Login to your Advertisement Portal
      </p>

      <LoginForm />

      <p className="text-center mt-6 text-sm">
        Don't have an account?{" "}
        <span className="text-blue-600 cursor-pointer font-medium">
          Sign Up
        </span>
      </p>
    </AuthLayout>
  );
}

export default Login;