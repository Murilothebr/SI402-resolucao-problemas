// Murilo - Igor

export class Clock {
  constructor(
    private a: number,
    private b: number,
    private c: number,
    private d: number
  ) {}

  closestToMidnight(): string {
    const nums = [this.a, this.b, this.c, this.d];
    const horarios: string[] = [];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (j === i) {
          continue;
        }
        for (let k = 0; k < 4; k++) {
          if (k === i || k === j) {
            continue;
          }
          for (let l = 0; l < 4; l++) {
            if (l === i || l === j || l === k) {
              continue;
            }

            const h = nums[i] * 10 + nums[j];
            const m = nums[k] * 10 + nums[l];

            if (h < 24 && m < 60) {
              const hora = h < 10 ? "0" + h : "" + h;
              const minuto = m < 10 ? "0" + m : "" + m;
              horarios.push(`${hora}:${minuto}`);
            }
          }
        }
      }
    }

    let menorDif = Number.MAX_VALUE;
    let resultado = "";

    for (const horario of horarios) {
      const [hora, minuto] = horario.split(":").map(Number);
      const minutosFalta = (24 * 60 - (hora * 60 + minuto)) % (24 * 60);

      if (minutosFalta < menorDif) {
        menorDif = minutosFalta;
        resultado = horario;
      }
    }

    return resultado;
  }
}
