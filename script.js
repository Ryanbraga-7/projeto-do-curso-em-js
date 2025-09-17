
const aluno = {
  nome: "rogerio",
  notas: [8, 7, 9, 6],

  
  calcularMedia: function() {
    const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / this.notas.length;
  }
};

const { nome } = aluno;
console.log("Nome do aluno:", nome);

const novasNotas = [...aluno.notas, 10];
console.log("Notas originais:", aluno.notas);
console.log("Notas com nova nota adicionada:", novasNotas);

console.log("Média das notas:", aluno.calcularMedia());
