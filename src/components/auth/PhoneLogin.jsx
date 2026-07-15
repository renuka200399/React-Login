import Input from "../common/Input";

function PhoneLogin() {
  return (
    <>
      <Input
        label="Phone Number"
        type="tel"
        placeholder="Enter your phone number"
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
    </>
  );
}

export default PhoneLogin;