import { FunctionDesc } from '../../../Nodes/FunctionNode';
import {
  angleAxisToQuat,
  eulerToQuat,
  mat3ToQuat,
  mat4ToQuat,
  quatConjugate,
  quatExp,
  quatLn,
  quatMultiply,
  quatPow,
  quatSlerp,
  Vec4,
  vec4Dot,
  vec4Equals,
  vec4Length,
  vec4MultiplyByScalar,
  vec4Normalize,
  vec4ToArray
} from './Internal/Vec4';

/*
- from Angle Axis
- from Euler
- to Angle Axis
- to Euler
- Conjugate
- Multiply
- Slerp
- Squad
- Scale
- 
*/

export const Constant = new FunctionDesc({
  name: 'math/quat',
  label: 'Quaternion',
  in: ['quat'],
  out: 'quat',
  exec: (a: Vec4) => a
});

export const Create = new FunctionDesc({
  name: 'math/toQuat/float',
  label: 'Float to Quat',
  in: [{ x: 'float' }, { y: 'float' }, { z: 'float' }, { w: 'float' }],
  out: 'quat',
  exec: (x: number, y: number, z: number, w: number) => new Vec4(x, y, z, w)
});

export const Elements = new FunctionDesc({
  name: 'math/toFloat/quat',
  label: 'Quat to Float',
  in: ['quat'],
  out: [{ x: 'float' }, { y: 'float' }, { z: 'float' }, { w: 'float' }],
  exec: vec4ToArray
});

export const Negate = new FunctionDesc({
  name: 'math/conjugate/quat',
  label: 'Conjugate',
  in: ['quat'],
  out: 'quat',
  exec: quatConjugate
});

export const Multiply = new FunctionDesc({
  name: 'math/multiply/quat',
  label: '×',
  in: ['quat', 'quat'],
  out: 'quat',
  exec: quatMultiply
});

export const Scale = new FunctionDesc({
  name: 'math/scale/quat',
  label: '×',
  in: ['quat', 'float'],
  out: 'quat',
  exec: vec4MultiplyByScalar
});

export const Length = new FunctionDesc({
  name: 'math/length/quat',
  label: 'Length',
  in: ['quat'],
  out: 'float',
  exec: vec4Length
});

export const Normalize = new FunctionDesc({
  name: 'math/normalize/quat',
  label: 'Normalize',
  in: ['quat'],
  out: 'quat',
  exec: vec4Normalize
});

export const Dot = new FunctionDesc({
  name: 'math/dot/quat',
  label: 'Dot Product',
  in: ['quat', 'quat'],
  out: 'float',
  exec: vec4Dot
});

export const Ln = new FunctionDesc({
  name: 'math/ln/quat',
  label: 'Ln',
  in: ['quat'],
  out: 'quat',
  exec: quatLn
});

export const Exp = new FunctionDesc({
  name: 'math/exp/quat',
  label: 'Exp',
  in: ['quat'],
  out: 'quat',
  exec: quatExp
});

export const Pow = new FunctionDesc({
  name: 'math/pow/quat',
  label: 'Pow',
  in: ['quat', 'float'],
  out: 'quat',
  exec: quatPow
});

export const Mat3ToQuat = new FunctionDesc({
  name: 'math/toQuat/mat3',
  label: 'To Quat',
  in: ['mat3'],
  out: 'quat',
  exec: mat3ToQuat
});

export const Mat4ToQuat = new FunctionDesc({
  name: 'math/toQuat/mat4',
  label: 'To Quat',
  in: ['mat4'],
  out: 'quat',
  exec: mat4ToQuat
});

export const EulerToQuat = new FunctionDesc({
  name: 'math/toQuat/euler',
  label: '÷',
  in: ['euler'],
  out: 'quat',
  exec: eulerToQuat
});

export const AngleAxisToQuat = new FunctionDesc({
  name: 'math/toQuat/angleAxis',
  label: 'Angle Axis to Quat',
  in: ['float', 'vec3'],
  out: 'quat',
  exec: angleAxisToQuat
});

export const Slerp = new FunctionDesc({
  name: 'math/slerp/quat',
  label: 'Slerp',
  in: [{ a: 'quat' }, { b: 'quat' }, { t: 'float' }],
  out: 'quat',
  exec: quatSlerp
});

export const Equal = new FunctionDesc({
  name: 'math/equal/quat',
  label: '=',
  in: [{ a: 'quat' }, { b: 'quat' }, { tolerance: 'float' }],
  out: 'boolean',
  exec: vec4Equals
});
