import React from "react";
import { useState } from "react";
import { RESET_STATE } from "../../lib/constants";
import ConfirmReset from "./confirm-reset";
import SubmitReset from "./submit-reset";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [resetState, setResetState] = useState(0);

  const goSubmitForgot = () => {
    let errorState = false;
    if (password === "" || password === undefined) {
      setErrorPassword(true);
      errorState = true;
    }
    if (errorState) return;
    setResetState(RESET_STATE.submit_page);
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
              {resetState === RESET_STATE.password_page && (
                <ConfirmReset
                  password={password}
                  setPassword={setPassword}
                  errorPassword={errorPassword}
                  confirmPassword={confirmPassword}
                  setConfirmPassword={setConfirmPassword}
                  errorConfirmPassword={errorConfirmPassword}
                  nextFunc={goSubmitForgot}
                />
              )}
              {resetState === RESET_STATE.submit_page && <SubmitReset />}
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

export default ResetPassword;
