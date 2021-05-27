import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  username: yup.string().required(),
  phone_number: yup
    .string()
    .required("Please enter a valid US phone number.")
    .matches(
      /[(]?\d{3}[-.)]?[ ]?\d{3}[-.]?\d{4}\b/,
      "Please enter a valid US phone number."
    ),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf(
    [yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default SignUpSchema;