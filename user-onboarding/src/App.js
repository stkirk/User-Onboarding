import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";

//Yup validation imports
import * as yup from "yup";
import schema from "./components/FormSchema";
import axios from "axios";

//***INITIAL STATE VALUES***/
const initialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  tos: "",
};

const initialUsers = [];

const initialDisabled = true;

function App() {
  //***STATES****
  const [users, setUsers] = useState(initialUsers); //array of user objects
  const [formValues, setFormValues] = useState(initialFormValues); //object
  const [formErrors, setFormErrors] = useState(initialFormErrors); //object
  const [disabled, setDisabled] = useState(initialDisabled); //boolean

  //***POST REQUEST HELPER FUNCTION***/
  const postNewUser = (newUser) => {};

  //***SCHEMA VALIDATION HELPER FUNCTION***/

  //***EVENT HANDLERS***/
  const change = (name, value) => {
    // Run validation with yup HERE

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = () => {};

  //***useEffect to toggle disabled */

  return (
    <div className="App">
      <h1>User Onboarding App</h1>
      <Form
        values={formValues}
        change={change}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
