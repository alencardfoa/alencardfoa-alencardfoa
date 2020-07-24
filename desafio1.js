

const nome = `Fabio`
const peso = 74.5
const altura = 1.65

const imc = peso / (altura * altura)
console.log (imc)


if (!(imc > 30))
{
    console.log (`${nome} Você não está acima do peso`)
} 
else 
{
    console.log (`${nome} Você está acima do  peso`)
}
