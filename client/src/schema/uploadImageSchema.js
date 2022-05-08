import TextInput from "../components/Fields/TextInput";

export const uploadImageSchema = {
  title: "Upload Image",
  type: "object",
  properties: {
    img_desc: {
      type: "string",
      uniforms: { component: TextInput },
    },
    img_url: {
      type: "string",
      uniforms: { component: TextInput },
    },
  },
  required: ["img_desc", "img_url"],
};
