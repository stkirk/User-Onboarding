import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Username required")
    .min(6, "Username must be at least 6 characters"),
  email: yup
    .string()
    .email("Must enter valid email")
    .required("Email required"),
  password: yup
    .string()
    .required("Password required")
    .min(8, "Password minimum 8 characters"),
  tos: yup.boolean().oneOf([true], "Must accept terms of service"),
});
