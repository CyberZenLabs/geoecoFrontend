import * as yup from "yup";

export const registerModalSchema = yup.object().shape({
 
  city: yup.string().required("Город обязателен"),
  email: yup.string().email("Не является почтой").required("Почта обязательна"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .max(40, "Максимум 40 символов")
    .required("Пароль обязателен"),
  passwordConfirm: yup
    .string()
    .required("Пароль обязателен")
    .oneOf([yup.ref("password"), null], "Пароли должны быть одинаковами"),
});
