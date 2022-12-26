import { FunctionDesc } from '@behave-graph/core';
import type Ajv from 'ajv';

export type IValidatorFactory = () => Ajv;

export const makeValidate = (validatorFactory: IValidatorFactory) => {
  return new FunctionDesc({
    name: 'logic/validate/object',
    category: 'Logic',
    label: 'Validate',
    helpDescription: `Validate data using passed schema. See [Ajv's validate](https://ajv.js.org/api.html#ajv-validate-schemaorref-object-string-data-any-boolean)`,
    in: [
      {
        schema: 'object'
      },
      {
        data: 'object'
      }
    ],
    out: [
      {
        result: 'boolean'
      },
      {
        errors: 'list'
      }
    ],
    exec: (schema: object, data: object) => {
      const validator = validatorFactory();

      const result = validator.validate(schema, data);

      return {
        result,
        errors: validator.errors || []
      };
    }
  });
};
