import * as yup from "yup";

export const registerModalSchema = yup.object().shape({
 
  city: yup.string().required("City is required"),
  email: yup.string().email("Is not an Email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters")
    .max(40, "Maximum 40 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
