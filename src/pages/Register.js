import React, { useContext, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
    navigate("/login"); // after register → go to login
  };

  return (
    <div className="text-black font-body flex justify-center items-center m-7">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 p-6 bg-white rounded-lg shadow-md w-full"
      >
        {/* ✅ Heading */}
        <h1 className="text-black text-2xl font-heading text-center mb-4">Register</h1>

        <div>
        <Label htmlFor="name" className="mb-2 block text-gray-700 dark:text-gray-300">
          Your name
        </Label>
        <TextInput
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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
      <div>
        <Label htmlFor="repeatpassword" className="mb-2 block text-gray-700 dark:text-gray-300">
          Repeat password
        </Label>
        <TextInput 
            id="repeatpassword" 
            type="password" 
            value={repeatpassword}
            onChange={(e) => setRepeatpassword(e.target.value)}
            required shadow />
      </div>

        {/* ✅ Visible button */}


        <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 transition text-white">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
