import TextInput from "../components/Fields/TextInput";

export const loginSchema = {
  title: "Login",
  type: "object",
  properties: {
    username: {
      type: "string",
      uniforms: { component: TextInput },
    },
    password: {
      type: "string",
      uniforms: {
        component: TextInput,
        type: "password",
      },
    },
  },
  required: ["username", "password"],
};
