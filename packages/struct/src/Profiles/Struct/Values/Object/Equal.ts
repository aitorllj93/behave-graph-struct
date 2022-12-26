import { FunctionDesc } from '@behave-graph/core';
import { equals } from 'rambdax';

export const Equal = new FunctionDesc({
  name: 'logic/equal/object',
  category: 'Logic',
  label: '=',
  helpDescription:
    "Returns true if its arguments are equivalent, false otherwise. Handles cyclical data structures. Dispatches symmetrically to the equals methods of both arguments, if present. See [Rambdax's equals](https://selfrefactor.github.io/rambdax/#/?id=equals)",
  in: ['object', 'object'],
  out: 'boolean',
  exec: (a: object, b: object) => equals(a, b)
});
