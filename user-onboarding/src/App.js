import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";

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

const initialFriends = [];

const initialDisabled = true;

function App() {
  //***STATES****
  const [users, setUsers] = useState(initialFriends);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  return (
    <div className="App">
      <h1>User Onboarding App</h1>
      <Form />
    </div>
  );
}

export default App;
