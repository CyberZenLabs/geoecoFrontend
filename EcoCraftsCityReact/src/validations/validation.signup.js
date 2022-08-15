import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string()
      .matches(

          /^[^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=\[\]\<\>][A-я\d][^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=[\]<\>]{0,100}$/,
          "Допускаются только буквы"

      )
      .required("Name обязательно"),
  lastName: yup.string().matches(
      /^[^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=[\]<\>][A-я\d][^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=[\]<\>]{0,100}$/,
      "Допускаются только буквы"
  ).required("Surname обязательна"),
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
