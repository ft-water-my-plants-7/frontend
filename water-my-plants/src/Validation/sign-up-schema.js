import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string(),
  phone: yup.number().required("Phone Number Required"),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});

export default SignUpSchema;