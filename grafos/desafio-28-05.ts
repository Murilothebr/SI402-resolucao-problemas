export default class Grafo {
  private arcos: Arco[];

  constructor() {
    this.arcos = [];
  }

  public add(a: string, b: string) {
    var arco = new Arco(a, b);
    this.arcos.push(arco);
  }

  public getNotNeighbours(node: string) {
    var set = new Set<string>();

    this.arcos.forEach((arco) => {
      set.add(arco.a);
      set.add(arco.b);
    });

    var neighbours = this.getNeighbours(node);

    neighbours.forEach((neighbour) => {
      set.delete(neighbour);
    });

    set.delete(node);

    return set;
  }

  public getNeighbours(node: string) {
    var neigh: string[] = [];

    var keys = this.arcos.filter((x) => x.a == node);
    keys.forEach((arco) => {
      neigh.push(arco.b);
    });

    var values = this.arcos.filter((x) => x.b == node);
    values.forEach((arco) => {
      neigh.push(arco.a);
    });

    return neigh;
  }
}

class Arco {
  public a: string;
  public b: string;

  constructor(a: string, b: string) {
    this.a = a;
    this.b = b;
  }
}

var grafo = new Grafo();

grafo.add("a", "b");
grafo.add("a", "c");
grafo.add("c", "b");
grafo.add("d", "e");
grafo.add("d", "f");
grafo.add("f", "b");

console.log("Neighbours :");
console.log(grafo.getNeighbours("a"));
console.log("---------------------");

console.log("Not Neighbours :");
console.log(grafo.getNotNeighbours("a"));
