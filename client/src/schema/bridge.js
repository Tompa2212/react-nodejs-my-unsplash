import Ajv from "ajv";
import addFormats from "ajv-formats";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
import { capitalize } from "../util/capitalize";

const ajv = new Ajv({
  allErrors: true,
  useDefaults: false,
  strict: false,
  $data: true,
});

addFormats(ajv);

function createValidator(schema) {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);

    const errors =
      validator.errors?.map((error) => {
        if (error.keyword === "required") {
          error.message = "Required";
        }

        if (error.keyword === "format" && error.params.format === "email") {
          error.message = "Invalid email address";
        }

        error.message = capitalize(error.message);

        return error;
      }) || [];

    return errors.length ? { details: validator.errors } : null;
  };
}

export const bridge = (schema) => {
  const schemaValidator = createValidator(schema);

  return new JSONSchemaBridge(schema, schemaValidator);
};
