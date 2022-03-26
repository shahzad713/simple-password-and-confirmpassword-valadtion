import React, { useState } from "react";

const Form = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    if (password.length == ConfirmPassword.length) alert("every thing is ok");
    else if (password.length !== ConfirmPassword.length) {
      alert("enter correct  password");
    }
  };

  return (
    <div className="form__div">
      <form>
        <div className="form-group row"></div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password :
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {!password.length
              ? null
              : password.length >= 5
              ? true
              : "password must  be 5 charcters"}
          </div>
          <label for="inputPassword" className="col-sm-2 col-form-label">
            ConfirmPassword:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword"
              placeholder="ConfirmPassword"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {!ConfirmPassword.length
            ? null
            : password == ConfirmPassword
            ? "password matched"
            : "password does not match"}

          <br />
        </div>
        <button type="button" class="btn btn-success  " onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
