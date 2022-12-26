import { ValueType } from '@behave-graph/core';

export const ListValue = new ValueType(
  'list',
  () => [],
  (value: string | unknown[]) =>
    typeof value === 'string' ? JSON.parse(value) : value,
  (value: unknown[]) => JSON.stringify(value),
  (value: unknown[]) => {
    throw new Error('Not implemented');
  }
);
