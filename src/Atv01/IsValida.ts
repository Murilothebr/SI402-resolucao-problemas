function validade(dia: number, mes: number, ano: number): boolean {
  const diaHoje = 31;
  const mesHoje = 3;
  const anoHoje = 2025;

  if (ano > anoHoje) {
    return false;
  }

  if(ano < anoHoje)
  {
    return true;
  }

  if (mes > mesHoje) {
    return false;
  }

  if (mes < mesHoje) {
    return false;
  }
  
  if (dia < diaHoje) {
    return true;
  }

  return false;
}

const result = validade(1, 1, 2026);
console.log(result);
