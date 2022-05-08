import TextInput from "../components/Fields/TextInput";

export const deleteImageSchema = {
  title: "Delete Image",
  type: "object",
  properties: {
    password: {
      type: "string",
      uniforms: { type: "password", component: TextInput },
    },
  },
  required: ["password"],
};
