import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().email("Не является почтой").required("Почта Обязательна"),
  password: yup
    .string()
    .min(8, "Минимальная 8 букв")
    .max(40, "Макссимальная 40 букв")
    .required("Пароль Обязателен"),
});
