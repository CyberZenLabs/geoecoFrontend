import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string()
      .matches(
          /^[^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=/\n][A-я\d][^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=/\n]{0,100}$/,
          "error"
      )
      .required("Имя обязательно"),
  lastName: yup.string().required("Фамилия обязательна"),
  email: yup.string().email("Не является почтой").required("Почта обязательна"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .max(40, "Максимум 40 символов")

    .required("Пароль обязателен")
    ,
  passwordConfirm: yup
    .string()
    .required("Пароль обязателен")
    .oneOf([yup.ref("password"), null], "Пароли должны быть одинаковыми"),
});
