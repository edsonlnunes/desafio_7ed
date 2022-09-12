import { Aluno } from "./Aluno"

const listaAlunos=[
    new Aluno("Kelly", 25),
    new Aluno("Paulo", 35),
    new Aluno("Rafael", 28),
    new Aluno("Edson", 25),
    new Aluno("Fabio", 35),
    new Aluno("Diener", 29),
    new Aluno("Vinicius", 35),
]

const gabarito = ['A', 'C', 'B', 'A', 'C', 'A', 'B', 'C', 'A', 'B']
function GabaritoNumero(){
    const random = Math.random()
    if(random <= 0.33)
    {
        console.log('A')
    }
    else if(random >= 0.66)
    {
        console.log('C')
    }
    else{
        console.log('B')
    }
} 
