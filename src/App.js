import React, { Component } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
{
  /*import countries from "./countries"; */
}

const CustomInput = ({ fieldType, ...others }) => {
  return (
    <div>
      <Input type={fieldType} {...others} />
      <ValidationMessage {...others} />
    </div>
  );
};

const CustomDropDown = ({ options, ...others }) => {
  return (
    <div>
      <DropDownList data={options} {...others} />
      <ValidationMessage {...others} />
    </div>
  );
};

const CustomCheckbox = ({ ...props }) => {
  return (
    <div>
      <Checkbox {...props} />
      <ValidationMessage {...props} />
    </div>
  );
};

const ValidationMessage = ({ valid, visited, validationMessage }) => {
  return (
    <>
      {!valid && visited && <div className="required">{validationMessage}</div>}
    </>
  );
};

const emailValidator = value =>
  new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email.";
const requiredValidator = value => {
  return value ? "" : "This field is required";
};

export default function App() {
  const handleSubmit = data => {
    console.log(`
      User ID: ${data.email}
      
      Password: ${data.password}
      
      Keep me signed in: ${data.Keepmesignedin}
    `);

    event.preventDefault();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={formRenderProps => (
        <form onSubmit={formRenderProps.onSubmit}>
          <h1>
            <strong>Sign in </strong>
          </h1>

          <Field
            label="User ID"
            name="email"
            fieldType="email"
            component={CustomInput}
            validator={[requiredValidator, emailValidator]}
          />

          <Field
            label="Password"
            name="password"
            fieldType="password"
            component={CustomInput}
            validator={requiredValidator}
          />

          <Field
            label="Keep me signed in."
            name="Keepmesignedin"
            component={CustomCheckbox}
            validator={requiredValidator}
          />

          <button disabled={!formRenderProps.allowSubmit}>Sign in</button>
          <br />
          <h8> ──────────────────── New Account ───────────────── </h8>
          <button disabled={!formRenderProps.allowSubmit}>
            Create new Account
          </button>
        </form>
      )}
    />
  );
}
