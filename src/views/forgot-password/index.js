import React, { useEffect } from "react";
import { useState } from "react";
import { login } from "../../apis/auth";
import CustomInput from "../../components/input";
import { FORGOT_STATE } from "../../lib/constants";
import EmailForgotPage from "./email-forgot";
import SubmitForgot from "./submit-forgot";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const [forgotState, setForgotState] = useState(0);

  useEffect(() => {
    if (email !== "" && email !== undefined) {
      setButtonState(true);
    } else {
      if (buttonState) setButtonState(false);
    }
  }, [email]);

  const goSubmitForgot = () => {
    let errorState = false;
    if (email === "" || email === undefined) {
      setErrorEmail(true);
      errorState = true;
    }
    if (errorState) return;
    setForgotState(FORGOT_STATE.submit_page);
  };

  const goBackFunc = () => {
    window.location.href = "/login";
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
                  src="/assets/icons/Logo_nero.svg"
                />
              </a>
            </div>
            <div className="main-content">
              {forgotState === FORGOT_STATE.email_page && (
                <EmailForgotPage
                  email={email}
                  setEmail={setEmail}
                  errorEmail={errorEmail}
                  nextFunc={goSubmitForgot}
                  backFunc={goBackFunc}
                />
              )}
              {forgotState === FORGOT_STATE.submit_page && (
                <SubmitForgot email={email} />
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
          src="/assets/images/Senza_titolo_3.png"
          className="bg-img"
        />
      </div>
    </div>
  );
}

export default ForgotPassword;
