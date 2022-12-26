import { FunctionDesc } from '@behave-graph/core';
import { assocPath } from 'rambdax';

export const AssocPath = new FunctionDesc({
  name: 'logic/assocPath/object',
  category: 'Logic',
  label: 'Assoc Path',
  helpDescription:
    "It makes a shallow clone of obj with setting or overriding with newValue the property found with path. See [Rambdax's assocPath](https://selfrefactor.github.io/rambdax/#/?id=assocpath)",
  in: [
    {
      path: 'string'
    },
    {
      newValue: 'object'
    },
    {
      obj: 'object'
    }
  ],
  out: 'object',
  exec: (pathStr: string, newValue: object, obj: object) => {
    const path = pathStr.split('.');
    return assocPath(path, newValue, obj);
  }
});
