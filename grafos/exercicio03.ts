class Execicio3 {
  private vertices: string[];
  private arestas: [string, string][];

  constructor(vertices: string[], arestas: [string, string][]) {
    this.vertices = vertices;
    this.arestas = arestas;
  }

  // 1. Matriz de Incidência Vértice-Aresta
  matrizIncidencia(): number[][] {
    return this.vertices.map(v =>
      this.arestas.map(([u, w]) => (v === u || v === w ? 1 : 0))
    );
  }

  // 2. Matriz de Incidência Nó-Arco (para grafo dirigido)
  matrizIncidenciaDirigida(): number[][] {
    return this.vertices.map(v =>
      this.arestas.map(([from, to]) =>
        v === from ? 1 : v === to ? -1 : 0
      )
    );
  }

  // 3. Matriz de Adjacência
  matrizAdjacencia(): number[][] {
    const index: Record<string, number> = {};
    this.vertices.forEach((v, i) => index[v] = i);

    const matrix = Array(this.vertices.length).fill(0)
      .map(() => Array(this.vertices.length).fill(0));

    this.arestas.forEach(([u, v]) => {
      matrix[index[u]][index[v]] = 1;
      matrix[index[v]][index[u]] = 1; // Remova esta linha para grafos dirigidos
    });

    return matrix;
  }

  // 4. Lista de Arcos
  listaArcos(): [string, string][] {
    return this.arestas;
  }

  // 5. Lista de Adjacência
  listaAdjacencia(): Record<string, string[]> {
    const lista: Record<string, string[]> = {};
    this.vertices.forEach(v => lista[v] = []);

    this.arestas.forEach(([u, v]) => {
      lista[u].push(v);
      lista[v].push(u); // Remova esta linha para grafos dirigidos
    });

    return lista;
  }

  imprimirTodasRepresentacoes(): void {
    console.log("=== Matriz de Incidência Vértice-Aresta ===");
    console.table(this.matrizIncidencia());

    console.log("=== Matriz de Incidência Nó-Arco (Dirigido) ===");
    console.table(this.matrizIncidenciaDirigida());

    console.log("=== Matriz de Adjacência ===");
    console.table(this.matrizAdjacencia());

    console.log("=== Lista de Arcos ===");
    console.log(this.listaArcos());

    console.log("=== Lista de Adjacência ===");
    console.log(this.listaAdjacencia());
  }
}

// Exemplo de uso:
const vertices = ['A', 'B', 'C'];
const arestas: [string, string][] = [['A', 'B'], ['B', 'C'], ['C', 'A']];

const grafo = new Execicio3(vertices, arestas);
grafo.imprimirTodasRepresentacoes();
