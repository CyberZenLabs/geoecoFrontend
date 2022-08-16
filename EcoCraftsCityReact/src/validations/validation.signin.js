import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().email("Не является почтой").required("Email is required"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .max(40,  "Максимум 40 символов")
    .required("Пароль обязателен"),
});
