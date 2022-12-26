import { FunctionDesc } from '@behave-graph/core';
import { concat } from 'rambdax';

export const Concat = new FunctionDesc({
  name: 'logic/concat/list/2',
  aliases: ['logic/concat/list'],
  category: 'Logic',
  label: 'Concat',
  helpDescription: `Returns the result of concatenating the given lists or strings. See [Rambdax's concat](https://selfrefactor.github.io/rambdax/#/?id=concat)`,
  in: ['list', 'list'],
  out: 'list',
  exec: (a: unknown[], b: unknown[]) => concat(a, b)
});

export const Concat3 = new FunctionDesc({
  name: 'logic/concat/list/3',
  category: 'Logic',
  label: 'Concat',
  helpDescription: `Returns the result of concatenating the given lists or strings. See [Rambdax's concat](https://selfrefactor.github.io/rambdax/#/?id=concat)`,
  in: ['list', 'list', 'list'],
  out: 'list',
  exec: (a: unknown[], b: unknown[], c: unknown[]) => concat(concat(a, b), c)
});
