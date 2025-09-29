import React, { useContext, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/"); // after login → go home
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center m-7">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 p-6 bg-white rounded-lg shadow-md w-full"
      >
        {/* ✅ Heading */}
        <h1 className="text-2xl font-heading text-center mb-4">Login</h1>

        <div>
        <Label htmlFor="email" className="mb-2 block text-gray-700 dark:text-gray-300">
          Your email
        </Label>             
        <TextInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
        <Label htmlFor="password" className="mb-2 block text-gray-700 dark:text-gray-300">
          Your password
        </Label>
          <TextInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* ✅ Visible button */}
        <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 transition text-white">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
