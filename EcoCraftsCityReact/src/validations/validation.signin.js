import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().email("Incorrect email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters")
    .max(40,  "Maximum 40 characters")
    .required("Password is required"),
});
