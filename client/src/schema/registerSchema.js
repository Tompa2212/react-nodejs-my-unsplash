import TextInput from "../components/Fields/TextInput";

export const registerSchema = {
  title: "Register",
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 5,
      uniforms: { component: TextInput },
    },
    email: {
      type: "string",
      format: "email",
      uniforms: { component: TextInput },
    },
    password: {
      type: "string",
      minLength: 6,
      uniforms: { type: "password", component: TextInput },
    },
    confirmPassword: {
      type: "string",
      const: { $data: "1/password" },
      uniforms: { type: "password", component: TextInput },
    },
  },

  required: ["username", "email", "password", "confirmPassword"],
};
