import React from "react";
import { useState } from "react";
import { login } from "../../apis/auth";
import CustomInput from "../../components/input";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const signIn = () => {
    let errorState = false;
    if (email === "" || email === undefined) {
      setErrorEmail(true);
      errorState = true;
    }
    if (password === "" || password === undefined) {
      setErrorPassword(true);
      errorState = true;
    }
    if (errorState) return;
    let user = {
      username: email,
      password,
    };

    login(user)
      .then((res) => {
        let token = res.data.token;
        localStorage.setItem("token", token);
        window.location.href = "/dashboard";
      })
      .catch((e) => {
        console.log(e);
        setErrorEmail(true);
        setErrorPassword(true);
      });
  };

  return (
    <div className="flex">
      <div className="grow ">
        <div className="des-content">
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-end w-full">
              <a href="#">
                <img
                  alt="logo"
                  className="cursor-pointer"
                  src="/assets/images/Livello_1.png"
                />
              </a>

              <div className="flex flex-wrap justify-end pl-12 text-[20px] font-normal">
                <div>Non hai ancora un account?</div>
                <a
                  href="#"
                  className="font-bold text-[#FE1C4E] cursor-pointer ml-2"
                >
                  {"Iscriviti ora"}
                </a>
              </div>
            </div>
            <div className="form-content">
              <div>
                <div>
                  <div className="font-bold text-[36px]">Bentornato!</div>
                  <div className="text-[20px] pt-4">
                    Accedi con le tue credenziali per iniziare a migliorarti
                  </div>
                </div>
                <div className="my-12">
                  <div>
                    <CustomInput
                      type="text"
                      placeholder="Email"
                      errorState={errorEmail}
                      setValue={setEmail}
                      style={"bg-[#F3F3F3]"}
                    />
                    <CustomInput
                      type="password"
                      placeholder="Password"
                      errorState={errorPassword}
                      setValue={setPassword}
                    />
                    <div className="flex justify-end">
                      <a
                        href="#"
                        className="text-[#FE1C4E] font-bold text-[20px] cursor-pointer"
                      >
                        Password dimenticata?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div>
                    <button className="btn-secondary" onClick={signIn}>
                      Accedi
                    </button>
                  </div>
                  <div className="px-6 flex items-center">
                    <span className="text-2xl font-medium text-[#56595E]">
                      o
                    </span>
                  </div>
                  <div className="pr-3">
                    <img
                      alt="google"
                      className="cursor-pointer"
                      src="/assets/images/Google_Logo.png"
                    />
                  </div>
                  <div className="pr-3">
                    <img
                      alt="google"
                      className="cursor-pointer"
                      src="/assets/images/Facebook_Logo.png"
                    />
                  </div>
                  <div className="pr-3">
                    <img
                      alt="google"
                      className="cursor-pointer"
                      src="/assets/images/Apple_Logo.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[16px] font-normal footer-content">
              <p className="font-semibold">
                Copyright © 2023 Luca Cerullo. Tutti i diritti riservati
              </p>
              <p>
                Luca Cerullo Via Giovanni Paolo I,164 , Campagna, Salerno,
                Italia P.IVA 06121250655
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-content">
        <img
          alt="login_img"
          src="/assets/images/Senza_titolo_1.png"
          className="bg-img"
        />
      </div>
    </div>
  );
}

export default LogIn;
