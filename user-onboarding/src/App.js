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

  //***SCHEMA VALIDATION HELPER FUNCTION***/
  //pass in same arguments as are used in onChange event handlers to validate those values
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        // console.log("VALID", valid);
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        // console.log("ERR", err);
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  //***EVENT HANDLERS***/
  const change = (name, value) => {
    // Run validation with yup HERE
    validate(name, value);

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //***POST REQUEST HELPER FUNCTION FOR SUBMIT CHANGE HANDLER***/
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log("RES.DATA", res.data);
        // debugger;
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
        console.log("ERROR", err);
      });
  };

  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    };
    postNewUser(newUser);
  };

  //***useEffect to toggle disabled */
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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
      <div className="users-container">
        {users.map((user) => {
          return <pre key={user.id}>{JSON.stringify(user)}</pre>;
        })}
      </div>
    </div>
  );
}

export default App;
