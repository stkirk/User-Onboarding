import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  return (
    <form className="form-container">
      <h3>Add a new user</h3>

      <div className="errors">{/* Render validation errors here */}</div>

      <div className="form-inputs">
        {/* text inputs */}
        <label>
          Username:
          <input
            type="text"
            name="username"
            // value={values.username}
            // onChange={onChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="text"
            name="email"
            // value={values.email}
            // onChange={onChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="text"
            name="password"
            // value={values.password}
            // onChange={onChange}
          />
        </label>
        <br />

        <label>I agree to terms of service</label>
        <input
          type="checkbox"
          name="tos"
          //   checked={values.tos}
          //   onChange={onChange}
        />
      </div>
      <button>Submit User</button>
    </form>
  );
}
