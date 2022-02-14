import React, { useState } from "react";
import { Form as Frm } from "react-bootstrap";
import Button from "./Button";

const Form = ({
  select = true,
  btnValue = "Send link",
  placeholder = "Enter your phone number",
  type = "button",
}) => {
  const [value, setValue] = useState("");
  const [validation, setValidation] = useState(false);
  const handle = (event) => {
    event.preventDefault();

    const emailValidation = (email) => {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email.toLowerCase());
    };
    console.log(" validateEmail(value)", emailValidation(value));
    setValidation(!emailValidation(value));
    // setValue(value);
  };
  return (
    <Frm>
      <Frm.Group className="trading-form">
        {select && (
          <Frm.Select aria-label="Default select example">
            <option>US +1</option>
            <option value="1">AU +43</option>
            <option value="1">RU +7</option>
            <option value="2">SW +46</option>
          </Frm.Select>
        )}
        <Frm.Control
          type="text"
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button variant="primary" onClick={handle} type={type}>
          {btnValue}
        </Button>
      </Frm.Group>
      {validation && (
        <div className="text-danger">Please fill out this field</div>
      )}
      {!validation && value && (
        <div className="text-success">
          You are subscribed! You’ll be hearing from us soon.
        </div>
      )}
    </Frm>
  );
};

export default React.memo(Form);
