import { FunctionDesc } from '@behave-graph/core';
import { mergeDeepRight } from 'rambdax';

export const MergeDeep = new FunctionDesc({
  name: 'logic/mergeDeep/object',
  category: 'Logic',
  label: 'Merge Deep',
  helpDescription: `
  Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects:

* and both values are objects, the two values will be recursively merged
* otherwise the value from the second object will be used.
  
See [Rambdax's mergeDeepRight](https://selfrefactor.github.io/rambdax/#/?id=mergeDeepRight)
  `,
  in: ['object', 'object'],
  out: 'object',
  exec: (a: object, b: object) => mergeDeepRight(a, b)
});
