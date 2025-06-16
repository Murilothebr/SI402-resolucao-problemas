class Arco {
  public a: string;
  public b: string;

  constructor(a: string, b: string) {
    this.a = a;
    this.b = b;
  }
}

export default class Network {
  private arcos: Arco[] = [];

  public add(a: string, b: string) {
    this.arcos.push(new Arco(a, b));
  }

  public getConnected(node: string) {
    const connectedNodes: string[] = [];
    const visited = new Set<string>();
    const queue: string[] = [node];

    while (queue.length > 0) {
      const current = queue.shift()!;

      if (visited.has(current)) {
        continue;
      }

      visited.add(current);

      if (current !== node) {
        connectedNodes.push(current);
      }

      const neighbors = this.arcos
        .filter((arco) => arco.a === current || arco.b === current)
        .map((arco) => (arco.a === current ? arco.b : arco.a));

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }

    return connectedNodes.sort();
  }

  public getNotConnected(node: string): string[] {
    const set = new Set<string>();

    for (const arco of this.arcos) {
      set.add(arco.a);
      set.add(arco.b);
    }

    const connected = this.getConnected(node);
    connected.push(node);

    connected.forEach((neighbour) => {
      set.delete(neighbour);
    });

    return Array.from(set).sort();
  }
}
