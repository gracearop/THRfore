import React from "react";

export default function Heading({ children }) {
  return (
    <h1 className="font-heading text-5xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 p-3 tracking-wider">
      {children}
    </h1>
  );
}
