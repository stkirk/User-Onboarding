import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  //   Event Handlers
  const onSubmit = (event) => {
    event.preventDefault();
    // debugger;
    submit();
  };

  const onChange = (event) => {
    // debugger;
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
      <h3>Add a new user</h3>

      <div className="errors">
        <div data-cy="usernameError">{errors.username}</div>
        <div data-cy="emailError">{errors.email}</div>
        <div data-cy="passwordError">{errors.password}</div>
        <div data-cy="tosError">{errors.tos}</div>
      </div>

      <div className="form-inputs">
        {/* text inputs */}
        <label>
          Username:
          <input
            data-cy="usernameInput"
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            data-cy="emailInput"
            type="text"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            data-cy="passwordInput"
            type="text"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </label>
        <br />

        <label>I agree to terms of service</label>
        <input
          data-cy="tosCheckbox"
          type="checkbox"
          name="tos"
          checked={values.tos}
          onChange={onChange}
        />
      </div>
      <button data-cy="submitButton" disabled={disabled}>
        Submit User
      </button>
    </form>
  );
}
