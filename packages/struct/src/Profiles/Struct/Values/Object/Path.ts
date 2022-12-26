import { FunctionDesc } from '@behave-graph/core';
import { path } from 'rambdax';

export const Path = new FunctionDesc({
  name: 'logic/path/object',
  category: 'Logic',
  label: 'Path',
  helpDescription:
    'If pathToSearch is "a.b" then it will return 1 if obj is {a:{b:1}}. It will return undefined, if such path is not found. See [Rambdax\'s path](https://selfrefactor.github.io/rambdax/#/?id=path)"',
  in: [
    {
      pathToSearch: 'string'
    },
    {
      obj: 'object'
    }
  ],
  out: 'object',
  exec: (pathToSearch: string, obj: object) => path(pathToSearch, obj)
});

export const PathAsString = new FunctionDesc({
  name: 'logic/path/string',
  category: 'Logic',
  label: 'Path',
  helpDescription:
    'If pathToSearch is "a.b" then it will return 1 if obj is {a:{b:1}}. It will return undefined, if such path is not found. See [Rambdax\'s path](https://selfrefactor.github.io/rambdax/#/?id=path)"',
  in: [
    {
      pathToSearch: 'string'
    },
    {
      obj: 'object'
    }
  ],
  out: 'string',
  exec: (pathToSearch: string, obj: object) => path(pathToSearch, obj)
});

export const PathAsInteger = new FunctionDesc({
  name: 'logic/path/integer',
  category: 'Logic',
  label: 'Path',
  helpDescription:
    'If pathToSearch is "a.b" then it will return 1 if obj is {a:{b:1}}. It will return undefined, if such path is not found. See [Rambdax\'s path](https://selfrefactor.github.io/rambdax/#/?id=path)"',
  in: [
    {
      pathToSearch: 'string'
    },
    {
      obj: 'object'
    }
  ],
  out: 'integer',
  exec: (pathToSearch: string, obj: object) => path(pathToSearch, obj)
});
