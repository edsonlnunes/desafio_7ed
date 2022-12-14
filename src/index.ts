import { Aluno } from "./Aluno";

const listaAlunos = [
  new Aluno("Kelly", 25),
  new Aluno("Paulo", 35),
  new Aluno("Rafael", 28),
  new Aluno("Edson", 25),
  new Aluno("Fabio", 35),
  new Aluno("Diener", 29),
  new Aluno("Vinicius", 35),
];

const gabarito = ["A", "C", "B", "A", "C", "A", "B", "C", "A", "B"];

function gerarResposta() {
  const random = Math.random();
  if (random <= 0.33) {
    return "A";
  } else if (random >= 0.66) {
    return "C";
  } else {
    return "B";
  }
}

listaAlunos.forEach((aluno) => {
  gabarito.forEach((respostaGabarito) => {
    const respostaAluno = gerarResposta();
    if (respostaAluno === respostaGabarito) {
      aluno.somarNota();
    }
  });
});

console.log("== Alunos Aprovados ==");
const aprovados = listaAlunos.filter((aluno) => aluno.status === "Aprovado");
console.log(`
${aprovados.map((aluno) => `Nome: ${aluno.nome} - Nota: ${aluno.nota}`)}
`);

console.log("== Alunos Reprovados ==");
const reprovados = listaAlunos.filter((aluno) => aluno.status === "Reprovado");
console.log(`
${reprovados.map((aluno) => `Nome: ${aluno.nome} - Nota: ${aluno.nota} \n`)}
`);

let somaNotas = 0
listaAlunos.forEach((aluno)=>somaNotas+=aluno.nota)
const mediaAlunos = somaNotas / listaAlunos.length


console.log("== Média Alunos ==");
console.log(`A média dos alunos é ${mediaAlunos.toFixed(2)}`)

const classificacao = listaAlunos.sort((a1, a2)=>{
    return a1.nota - a2.nota
})

const melhorAluno = classificacao.length - 1
console.log("== Melhor Aluno ==")
console.log(`Nome: ${classificacao[melhorAluno].nome} - Nota: ${classificacao[melhorAluno].nota} `)


const piorAluno = 0
console.log("== Pior Aluno ==")
console.log(`Nome: ${classificacao[piorAluno].nome} - Nota: ${classificacao[piorAluno].nota} `)