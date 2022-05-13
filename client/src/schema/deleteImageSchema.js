import TextInput from "../components/Fields/TextInput";

export const deleteImageSchema = {
  title: "Delete Image",
  type: "object",
  properties: {
    username: {
      type: "string",
      uniforms: { component: TextInput },
    },
  },
  required: ["password"],
};
