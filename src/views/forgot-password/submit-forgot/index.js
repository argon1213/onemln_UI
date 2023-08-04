import React from "react";

const SubmitForgot = (props) => {
  const { email } = props;
  return (
    <div>
      <div>
        <div className="font-bold text-[32px]">Email inviata!</div>
        <div className="text-[18px] pt-4">
          {`Le istruzioni per reimpostare la password sono state inviate a ${email}`}
        </div>
      </div>
      <div className="flex flex-wrap justify-start pt-12">
        <div className="submit-content">
          <button
            className="btn-primary"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Torna al login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitForgot;
