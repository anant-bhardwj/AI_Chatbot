import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    email,
    password,
    confirmPassword,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      
      localStorage.setItem("app-user", JSON.stringify(data));

      
      setAuthUser(data);

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  email,
  password,
  confirmPassword,
}) {
  //   if (!fullName || !username || !email || !password || !confirmPassword) {
  //     toast.error("Please fill all the fields");
  //     return false;
  //   }
  if (!fullName || !username) {
    toast.error("Please fill name and user");
    return false;
  }
  if (!email) {
    toast.error("Please fill email");
    return false;
  }
  if (!password || !confirmPassword) {
    toast.error("Please fill pass");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do NOT match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be 6 characters or more");
    return false;
  }

  return true;
}
