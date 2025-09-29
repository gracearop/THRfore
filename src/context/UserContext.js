import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (name, email, password) => {
    const newUser = { name, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser)); // store user for login
  };

  const login = (email, password) => {
    const stored = JSON.parse(localStorage.getItem("registeredUser"));
    if (stored && stored.email === email && stored.password === password) {
      setUser(stored);
      localStorage.setItem("user", JSON.stringify(stored));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
