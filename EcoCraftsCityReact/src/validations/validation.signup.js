import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string()
      .matches(

          /^[^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=\[\]\<\>][A-я\d][^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=[\]<\>]{0,100}$/,
          "Only letters are allowed"

      )
      .required("Name is required"),
  lastName: yup.string().matches(
      /^[^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=[\]<\>][A-я\d][^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=[\]<\>]{0,100}$/,
      "Only letters are allowed"
  ).required("Surname is required"),
  email: yup.string().email("Incorrect email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters")
    .max(40, "Maximum 40 characters")

    .required("Password is required")
    ,
  passwordConfirm: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
