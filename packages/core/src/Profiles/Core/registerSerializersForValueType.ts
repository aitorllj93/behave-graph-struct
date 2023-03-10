/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionDesc } from '../../Nodes/FunctionNode';
import { Registry } from '../../Registry';
import { toCamelCase } from '../../toCamelCase';

export function registerSerializersForValueType(
  registry: Registry,
  valueTypeName: string
) {
  const camelCaseValueTypeName = toCamelCase(valueTypeName);
  registry.nodes.register(
    new FunctionDesc({
      name: `math/to${camelCaseValueTypeName}/string`,
      label: `To ${camelCaseValueTypeName}`,
      helpDescription: `Converts a string to a ${valueTypeName}`,
      in: ['string'],
      out: valueTypeName,
      exec: (a: string) => registry.values.get(valueTypeName).deserialize(a)
    }),
    new FunctionDesc({
      name: `math/toString/${valueTypeName}`,
      label: 'To String',
      helpDescription: `Converts a ${valueTypeName} to a string`,
      in: [valueTypeName],
      out: 'string',
      exec: (a: any) => registry.values.get(valueTypeName).serialize(a)
    })
  );
}
