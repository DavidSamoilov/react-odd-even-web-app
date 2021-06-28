import React from "react";

const InputForm = ({inputSetState, inputName}) => {
  return (
    <>
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            {inputName}
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          onChange={e => inputSetState(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default InputForm;
