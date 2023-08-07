import React from "react";

const SubmitReset = (props) => {
  const {} = props;
  return (
    <div>
      <div>
        <div className="title">Password aggiornata!</div>
        <div className="description">
          Accedi al tuo account con le nuove credenziali
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
            Accedi
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitReset;
