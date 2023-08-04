import React from "react";
import { useState } from "react";
import { login } from "../../apis/auth";
import CustomInput from "../../components/input";
import NameRegister from "./name-register";
import { REGISTER_STATE } from "../../lib/constants";
import EmailRegister from "./email-register";
import SubmitRegister from "./submit-register";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [code, setCode] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorSurName, setErrorSurName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorCode, setErrorCode] = useState(false);
  const [registerState, setRegisterState] = useState(0);

  const signIn = () => {
    let errorState = false;
    if (name === "" || name === undefined) {
      setErrorName(true);
      errorState = true;
    }
    if (surName === "" || surName === undefined) {
      setErrorSurName(true);
      errorState = true;
    }
    if (errorState) return;
    let user = {
      name,
      surName,
    };

    login(user)
      .then((res) => {
        let token = res.data.token;
        localStorage.setItem("token", token);
        window.location.href = "/dashboard";
      })
      .catch((e) => {
        console.log(e);
        setErrorName(true);
        setErrorSurName(true);
      });
  };

  const goEmailRegister = () => {
    let errorState = false;
    if (name === "" || name === undefined) {
      setErrorName(true);
      errorState = true;
    }
    if (surName === "" || surName === undefined) {
      setErrorSurName(true);
      errorState = true;
    }
    if (errorState) return;
    setRegisterState(REGISTER_STATE.email_page);
  };

  const goSubmitRegister = () => {
    let errorState = false;
    if (email === "" || email === undefined) {
      setErrorEmail(true);
      errorState = true;
    }
    if (errorState) return;
    setRegisterState(REGISTER_STATE.submit_page);
  };

  const backRegisterState = () => {
    let __state = registerState;
    --__state;
    if (__state == 0) __state = 0;
    setRegisterState(__state);
  };

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

              {registerState === REGISTER_STATE.name_page && (
                <div className="flex flex-wrap justify-end pl-12 text-[18px] font-normal">
                  <div className="header-question">Hai già un account?</div>
                  <a
                    href="/login"
                    className="font-bold text-[#FE1C4E] cursor-pointer ml-2 whitespace-nowrap"
                  >
                    Accedi
                  </a>
                </div>
              )}
            </div>
            <div className="form-content">
              {registerState === REGISTER_STATE.name_page && (
                <NameRegister
                  name={name}
                  surName={surName}
                  code={code}
                  setName={setName}
                  errorName={errorName}
                  setSurName={setSurName}
                  errorSurName={errorSurName}
                  setCode={setCode}
                  errorCode={errorCode}
                  nextFunc={goEmailRegister}
                />
              )}
              {registerState === REGISTER_STATE.email_page && (
                <EmailRegister
                  email={email}
                  setEmail={setEmail}
                  errorEmail={errorEmail}
                  nextFunc={goSubmitRegister}
                  backFunc={backRegisterState}
                />
              )}
              {registerState === REGISTER_STATE.submit_page && (
                <SubmitRegister email={email} />
              )}
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
          src="/assets/images/Senza_titolo_2.png"
          className="bg-img"
        />
      </div>
    </div>
  );
}

export default Register;
