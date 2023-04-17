import React, { useState, useEffect } from "react";
//import useEmailValidation from "../hooks/useEmailValidation";
function Email() {
  const [email, setEmail] = useState("");
  // const emailValidation = { isEmpty: false, isValid: true };
  useEffect(() => {
    console.log(email);
  }, [email]);
  return (
    <form
      className="flex flex-col flex-1 mb-12 px-8"
      onSubmit={(e) => {
        emailValidation = useEmailValidation(email);
        e.preventDefault();
      }}
    >
      <input
        className="border-blue-pale border-2 rounded-3xl px-8 py-3 text-sm placeholder:text-blue-pale mb-2 focus:outline-blue-dark font-medium"
        type="email"
        required
        placeholder="Your email address..."
        onChange={(e) => setEmail(e.target.value)}
      />
      {/*emailValidation.isEmpty ? (
        <p>Whoops! It looks like you forgot to add your email</p>
      ) : emailValidation.isValid ? (
        ""
      ) : (
        <p>Please provide a valid email address</p>
      )*/}
      <button className="bg-blue text-white text-sm py-3 rounded-3xl shadow-lg shadow-blue-pale font-semibold transition-opacity hover:opacity-75 ">
        Notify Me
      </button>
    </form>
  );
}

export default Email;
