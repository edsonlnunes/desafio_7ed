// Aluno com os atributos Nome, Idade, Nota e Status.

export class Aluno {
  private _nome: string;
  private _idade: number;
  private _nota: number;
  private _status: string = "";

  constructor(nome: string, idade: number) {
    this._nome = nome;
    this._idade = idade;
    this._nota = 0;
  }

  get nome(): string {
    return this._nome;
  }
  get idade(): number {
    return this._idade;
  }
  get nota(): number {
    return this._nota;
  }
}


