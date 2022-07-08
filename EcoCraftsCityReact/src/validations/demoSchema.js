import * as Yup from "yup";

export const demoSchema = Yup.object().shape({
  email: Yup.string().email("123").required(),
  name: Yup.string().required(),
});
