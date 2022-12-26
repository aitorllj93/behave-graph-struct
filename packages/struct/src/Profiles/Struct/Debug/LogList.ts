import {
  FlowNode,
  Graph,
  ILogger,
  NodeDescription,
  Socket
} from '@behave-graph/core';

export class LogList extends FlowNode {
  public static Description = (logger: ILogger) =>
    new NodeDescription(
      'debug/log/list',
      'Action',
      'Log',
      (description, graph) => new LogList(description, graph, logger)
    );

  constructor(
    description: NodeDescription,
    graph: Graph,
    private readonly logger: ILogger
  ) {
    super(
      description,
      graph,
      [
        new Socket('flow', 'flow'),
        new Socket('string', 'text'),
        new Socket('string', 'severity', 'info'),
        new Socket('list', 'payload')
      ],
      [new Socket('flow', 'flow')]
    );
  }

  override triggered(fiber: any) {
    const text = this.readInput<string>('text');
    const payload = this.readInput<any>('payload');

    const message = `${text} ${JSON.stringify(payload)}`;

    switch (this.readInput<string>('severity')) {
      case 'verbose':
        this.logger.verbose(message);
        break;
      case 'info':
        this.logger.info(message);
        break;
      case 'warning':
        this.logger.warn(message);
        break;
      case 'error':
        this.logger.error(message);
        break;
    }

    fiber.commit(this, 'flow');
  }
}
