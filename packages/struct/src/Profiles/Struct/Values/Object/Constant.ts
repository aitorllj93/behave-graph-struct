import { FunctionDesc } from '@behave-graph/core';

export const Constant = new FunctionDesc({
  name: 'logic/object',
  category: 'Logic',
  label: 'Object',
  helpDescription: 'Returns the object passed as input',
  in: ['object'],
  out: 'object',
  exec: (a: object) => a
});
