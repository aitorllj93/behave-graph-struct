import { Graph } from '../../../Graphs/Graph';
import { FunctionNode } from '../../../Nodes/FunctionNode';
import { Node } from '../../../Nodes/Node';
import { NodeDescription } from '../../../Nodes/Registry/NodeDescription';
import { Registry } from '../../../Registry';
import { toInteger } from './BooleanNodes';
import { toBoolean as intToBoolean } from './IntegerNodes';

const makeEmptyGraph = () => {
  return new Graph(new Registry());
};

const makeFunctionNodeWithEmptyGraph = (nodeDescription: NodeDescription) =>
  nodeDescription.factory(intToBoolean, makeEmptyGraph(), {}) as FunctionNode;

const setInputSocketValue = (node: Node, socketName: string, value: any) => {
  const inputSocket = node.inputs.find((socket) => socket.name === socketName);

  if (!inputSocket)
    throw new Error(`cannot find input socket with name ${socketName}`);
  inputSocket.value = value;
};

const getOutputSocketValue = (node: Node, socketName: string) => {
  const outputSocket = node.outputs.find(
    (socket) => socket.name === socketName
  );

  if (!outputSocket)
    throw new Error(`cannot find input socket with name ${socketName}`);

  return outputSocket.value;
};

describe('Boolean Conversions', () => {
  describe('math/toBoolean/integer', () => {
    let node: FunctionNode;

    beforeEach(() => {
      node = makeFunctionNodeWithEmptyGraph(intToBoolean);
    });
    it.only('writes to the output false when the input value is 0', () => {
      setInputSocketValue(node, 'a', 0n);
      node.exec(node);

      expect(getOutputSocketValue(node, 'result')).toEqual(false);
    });
    it('writes to the output true when the input value is non-zero', () => {
      // set value to 1
      setInputSocketValue(node, 'a', 1n);
      node.exec(node);

      expect(getOutputSocketValue(node, 'result')).toEqual(true);

      // set value to 5
      setInputSocketValue(node, 'a', 5n);
      node.exec(node);

      expect(getOutputSocketValue(node, 'result')).toEqual(true);
    });
  });

  describe('math/toInteger/boolean', () => {
    let node: FunctionNode;

    beforeEach(() => {
      node = makeFunctionNodeWithEmptyGraph(toInteger);
    });
    it.only('writes to the output 1 when the input value is true', () => {
      setInputSocketValue(node, 'a', true);
      node.exec(node);

      const outputValue = getOutputSocketValue(node, 'result');

      expect(outputValue).toEqual(1n);
    });
    it('writes to the output 0 when the input value is false', () => {
      setInputSocketValue(node, 'a', false);
      node.exec(node);

      const outputValue = getOutputSocketValue(node, 'result');

      expect(outputValue).toEqual(0n);
    });
  });
});
