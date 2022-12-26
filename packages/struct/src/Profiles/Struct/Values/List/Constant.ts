import { FunctionDesc } from '@behave-graph/core';

export const Constant = new FunctionDesc({
  name: 'logic/list',
  category: 'Logic',
  label: 'List',
  helpDescription: 'Returns the list passed as input',
  in: ['list'],
  out: 'list',
  exec: (a: unknown[]) => a
});
