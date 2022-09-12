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
const aprovados = listaAlunos.filter((aluno => aluno.status === "Aprovado"));
