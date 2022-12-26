/* eslint-disable max-len */
import { DefaultLogger, ILogger, Registry } from '@behave-graph/core';
import { registerSerializersForValueType } from '@behave-graph/core/src/Profiles/Core/registerSerializersForValueType';
import Ajv from 'ajv';

import { LogList } from './Debug/LogList';
import { LogObject } from './Debug/LogObject';
import { makeValidate } from './Logic/Validate';
import { Concat, Concat3 } from './Values/List/Concat';
import { Constant as ListConstant } from './Values/List/Constant';
import { Equal as ListEqual } from './Values/List/Equal';
import { ListValue } from './Values/List/Value';
import { AssocPath } from './Values/Object/Assoc';
import { Constant } from './Values/Object/Constant';
import { Equal } from './Values/Object/Equal';
import { MergeDeep } from './Values/Object/MergeDeep';
import { Path, PathAsInteger, PathAsString } from './Values/Object/Path';
import { ObjectValue } from './Values/Object/Value';

export function registerStructProfile(
  registry: Registry,
  logger: ILogger = new DefaultLogger()
) {
  const { nodes, values } = registry;

  // pull in value type nodes
  values.register(ObjectValue);
  values.register(ListValue);

  // pull in value type nodes
  nodes.register(AssocPath);
  nodes.register(Constant);
  nodes.register(Equal);
  nodes.register(MergeDeep);
  nodes.register(Path);
  nodes.register(PathAsInteger);
  nodes.register(PathAsString);
  nodes.register(ListConstant);
  nodes.register(ListEqual);
  nodes.register(Concat);
  nodes.register(Concat3);
  nodes.register(LogObject.Description(logger));
  nodes.register(LogList.Description(logger));
  nodes.register(makeValidate(() => new Ajv()));

  // string converters

  ['object', 'list'].forEach((valueTypeName) => {
    registerSerializersForValueType(registry, valueTypeName);
  });

  return registry;
}
