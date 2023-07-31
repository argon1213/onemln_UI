import React from "react";
import { useState } from "react";
import { login } from "../../apis/auth";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    if(email === "" || email === undefined) return;
    if(password === "" || password === undefined) return;
    let user = {
      username: email,
      password
    };

    login(user).then((res) => {
      let token = res.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    }).catch((e) => {
      console.log(e);
    })
  };

  return (
    <div className="flex justify-center">
      <div className="w-[360px] py-[100px]">
        <div>
          <p className="text-[30px] font-semibold text-center">
            Log in to your account
          </p>
          <p className="text-[16px] text-center">
            Welcome back! Please enter your details.
          </p>
        </div>
        <div className="my-6">
          <div className="my-4">
            <p className="text-[14px] py-2">Email</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="custom-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="my-4">
            <p className="text-[14px] py-2">Password</p>
            <input
              type="password"
              placeholder="Password"
              className="custom-input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <button className="w-full btn-primary" onClick={signIn}>
            Sign in
          </button>
        </div>
        <div className="my-6">
          <p className="text-center">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#CC5200]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
