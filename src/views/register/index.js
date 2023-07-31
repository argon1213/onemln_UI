import React from "react";
import { useState } from "react";
import { register } from "../../apis/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    if (name === "" || name === undefined) return;
    if (email === "" || email === undefined) return;
    if (password === "" || password === undefined) return;
    let user = {
      name,
      email,
      password,
    };

    register(user)
      .then((res) => {
        window.location.href = "/login";
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="w-[360px] py-[100px]">
        <div>
          <p className="text-[30px] font-semibold text-center">
            Create an account
          </p>
        </div>
        <div className="my-8">
          <div className="my-4">
            <input
              type="text"
              placeholder="Name"
              className="custom-input"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="my-4">
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
            <input
              type="password"
              placeholder="Password"
              className="custom-input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="my-4">
            <button className="w-full btn-primary" onClick={signUp}>
              Get started
            </button>
          </div>
        </div>

        <div className="my-6">
          <p className="text-center">
            Already have an account?{" "}
            <a href="/login" className="text-[#CC5200]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
