import { Assert } from '../Diagnostics/Assert';
import { Engine } from '../Execution/Engine';
import { Graph } from '../Graphs/Graph';
import { Socket } from '../Sockets/Socket';
import { Node, NodeConfiguration } from './Node';
import { NodeDescription } from './Registry/NodeDescription';

// async flow node with only a single flow input
export class AsyncNode extends Node {
  constructor(
    description: NodeDescription,
    graph: Graph,
    inputs: Socket[] = [],
    outputs: Socket[] = [],
    configuration: NodeConfiguration = {}
  ) {
    super(description, graph, inputs, outputs, configuration);
    // must have at least one input flow socket
    Assert.mustBeTrue(
      this.inputs.some((socket) => socket.valueTypeName === 'flow')
    );

    // must have at least one output flow socket
    Assert.mustBeTrue(
      this.outputs.some((socket) => socket.valueTypeName === 'flow')
    );
  }

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  triggered(
    engine: Engine,
    triggeringSocketName: string,
    finished: () => void
  ) {
    throw new Error('not implemented');
  }

  dispose() {
    throw new Error('not implemented');
  }
}

export class AsyncNode2 extends AsyncNode {
  constructor(props: {
    description: NodeDescription;
    graph: Graph;
    inputs?: Socket[];
    outputs?: Socket[];
  }) {
    super(props.description, props.graph, props.inputs, props.outputs);
  }
}
