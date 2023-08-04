import React from "react";

const SubmitRegister = (props) => {
  const { email } = props;
  return (
    <div>
      <div>
        <div className="font-bold text-[32px]">Email inviata!</div>
        <div className="text-[18px] pt-4">
          {`Le istruzioni per impostare la password sono state inviate a ${email}`}
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
            Torna alla home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitRegister;
