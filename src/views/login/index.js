import React, { useEffect } from "react";
import { useState } from "react";
import { login } from "../../apis/auth";
import CustomInput from "../../components/input";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [buttonState, setButtonState] = useState(false);

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

  useEffect(() => {
    if (
      email !== "" &&
      email !== undefined &&
      password !== "" &&
      password !== undefined
    ) {
      setButtonState(true);
    } else {
      if (buttonState) setButtonState(false);
    }
  }, [email, password]);

  return (
    <div className="flex">
      <div className="grow ">
        <div className="des-content">
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-end w-full header-content">
              <a href="#">
                <img
                  alt="logo"
                  className="cursor-pointer"
                  src="/assets/images/Livello_1.png"
                />
              </a>

              <div className="flex flex-wrap justify-end pl-12 text-[18px] font-normal">
                <div className="header-question">
                  Non hai ancora un account?
                </div>
                <a
                  href="/register"
                  className="font-bold text-[#FE1C4E] cursor-pointer ml-2 whitespace-nowrap"
                >
                  Iscriviti ora
                </a>
              </div>
            </div>
            <div className="form-content">
              <div>
                <div>
                  <div className="font-bold text-[32px]">Bentornato!</div>
                  <div className="text-[18px] pt-4">
                    Accedi con le tue credenziali per iniziare a migliorarti
                  </div>
                </div>
                <div className="my-8">
                  <div>
                    <CustomInput
                      type="text"
                      placeholder="Email"
                      errorState={errorEmail}
                      value={email}
                      setValue={setEmail}
                      style={"bg-[#F3F3F3]"}
                    />
                    <CustomInput
                      type="password"
                      placeholder="Password"
                      errorState={errorPassword}
                      value={password}
                      setValue={setPassword}
                    />
                    <div className="flex justify-end">
                      <a
                        href="#"
                        className="text-[#FE1C4E] font-bold text-[18px] cursor-pointer"
                      >
                        Password dimenticata?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-start">
                  <div className="submit-content">
                    <button
                      className={buttonState ? "btn-primary" : "btn-secondary"}
                      onClick={signIn}
                    >
                      Accedi
                    </button>
                  </div>
                  <div className="flex">
                    <div className="px-6 text-2xl font-medium text-[#56595E] h-full leading-[65px] submit-connecter">
                      o
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
            </div>

            <div className="text-[14px] font-normal footer-content">
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
