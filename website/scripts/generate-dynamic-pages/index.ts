import { join } from 'node:path';

import { registerCoreProfile } from '../../../packages/core/src/Profiles/Core/registerCoreProfile';
import { Registry } from '../../../packages/core/src/Registry';
import { registerStructProfile } from '../../../packages/struct/src/Profiles/Struct/registerStructProfile';
import generatePagesFromRegistry from './generate-pages-from-registry';

const structRegistry = new Registry();
const structFunctionalRegistry = new Registry();

registerStructProfile(structRegistry);
registerCoreProfile(structFunctionalRegistry);
registerStructProfile(structFunctionalRegistry);

generatePagesFromRegistry(
  structRegistry,
  join(__dirname, '../../docs/profiles/Struct'),
  structFunctionalRegistry
);
