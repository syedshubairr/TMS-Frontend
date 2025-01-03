import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { RegisterFormProps } from "./types";

const RegisterForm: FC<RegisterFormProps> = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Signup Form Data", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email..."
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password..."
        />
        <div>
          <Button
            className="customButton"
            type="submit"
            fullWidth
            sx={{ padding: "0.9rem" }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </div>
      </form>
      <div className="mt-5 flex items-center gap-2 py-5 justify-center">
        <span>Don't have an account?</span>
        <Button onClick={togglePanel}>Login</Button>
      </div>
    </div>
  );
};

export default RegisterForm;
