import Input from "../common/Input";

function EmailLogin() {
  return (
    <>
      <Input
        label="Email"
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
    </>
  );
}

export default EmailLogin;