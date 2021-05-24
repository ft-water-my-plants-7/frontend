import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string(),
  phone: yup.number().min(11, "Phone Number Required").required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});

export default SignUpSchema;