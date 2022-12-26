import { ValueType } from '@behave-graph/core';

export const ObjectValue = new ValueType(
  'object',
  () => [],
  (value: string | object) =>
    typeof value === 'string' ? JSON.parse(value) : value,
  (value: object) => JSON.stringify(value),
  (value: object) => {
    throw new Error('Not implemented');
  }
);
