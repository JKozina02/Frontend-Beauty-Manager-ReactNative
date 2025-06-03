import * as yup from "yup";

const passwordComplexityTest = (yup) =>
  yup.string().test("password-complexity", function (value) {
    if (!value) return true;

    if (value.length < 8) {
      return this.createError({ message: "Password must be at least 8 characters" });
    }

    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/;

    const errors = [];

    if (!lowercaseRegex.test(value)) errors.push("one lowercase letter in latin");
    if (!uppercaseRegex.test(value)) errors.push("one capital letter in latin");
    if (!numberRegex.test(value)) errors.push("one digit");
    if (!symbolRegex.test(value)) errors.push("one special character");

    if (errors.length > 0) {
      return this.createError({
        message: `password complexity - ${4 - errors.length}/4: password must contain at least ${errors.join(", ")}`,
      });
    }

    return true;
  });

export const schemaSignUp = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .matches(/^[A-Z]/, "Name must start with a capital letter"),
  email: yup.string().email("Invalid email format").required("Email is a required field"),
  password: passwordComplexityTest(yup).required("Password is a required field"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "The passwords must match "),
});

export const schemaSignIn = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is a required field"),
  password: passwordComplexityTest(yup).required("Password is a required field"),
});

export const schemaProfile = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .matches(/^[A-Z]/, "Name must start with a capital letter"),
  email: yup.string().email("Invalid email format").required("Email is a required field"),
  password: passwordComplexityTest(yup).notRequired(),
  confirmPassword: yup.string().when("password", {
    is: (val) => val && val.length > 0,
    then: (schema) => schema.oneOf([yup.ref("password")], "The passwords must match "),
    otherwise: (schema) => schema.notRequired(),
  }),
});
