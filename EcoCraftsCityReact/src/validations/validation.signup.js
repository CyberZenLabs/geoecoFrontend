import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Имя обязательна"),
  lastName: yup.string().required("Фамилия обязательна"),
  email: yup.string().email("Не является почтой").required("Почта Обязательна"),
  password: yup
    .string()
    .min(8, "Минимальная 8 букв")
    .max(40, "Макссимальная 40 букв")
    .required("Пароль Обязателен"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны быть одинаковами"),
});
