/*let n = 0;
while(n < 91){
    console.log(n+n)
    n += 10
}

let terminar = false;
let contador = 1;
while (terminar != true){
    let contunue = confirm(`[${contador}] Quer continuar`)
    terminar = contunue === true ? false : true
    contador += 1
}
let terminar = false
let contador = 0
while (contador != true) {
    let continuar = confirm('Quer continuar?')
    terminar = continuar === true ? false : true
}
console.log(contador)
//console.log(contar)

let numInicial = Number(prompt('Digite um número '));
let numFinal = Number(prompt('Digite o segundo número '))
while (numInicial <= numFinal) {
    console.log(numInicial)
    numInicial += 1 
    break
}

let contacto = [
    {
        Nome: 'Dionísio Pinto',
        telefone: 932767426,
        email: 'mulando1@hotmail.com'
    },
    {
        Nome: 'Genisio Mulando',
        telefone: 993301724,
        email: 'genisio@gmail.com'
    }
]
let i = 0
while (i <= 1) {
    console.log(contacto[i])
    i++    
} 

let numInicial = 0//Number(prompt('Digite um número '));
let numFinal =  10//Number(prompt('Digite o segundo número '))
/*while (numInicial < numFinal) {
    console.log(numInicial)
    numInicial++      
}
do {
    console.log(numInicial)
    numInicial++   
} while (numInicial < numFinal)

for (let i = 0; i < 10; i++){
    console.log(i)
}
console.log('Estamos a usar o loop While')
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Somar um loop no array

let valor = [10, 30, 5, 100]
let soma = 0
/*for (let i = 0; i < 4; i++){
    soma += valor[i]
}
console.log(soma)

for (let i = 0; i < valor.length; i++) {
    soma += valor[i];
    
}
console.log(soma)

let nomes = []
let terminou = false
while (!ternimou) {
    let nome = prompt('Insirá outro nomes ou pressione CANCELAR')
    if (nome != null) {
        nomes.push(nome)
    } else {
        terminou = true
    }
}
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}
*//*
let nomes = [];
let terminou = false;
while (!terminou) {
    let nome = prompt("Insirá outro nomes ou pressione CANCELAR");
    if (nome != null) {
        nomes.push(nome);
    } else {
        terminou = true;
    }
}
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}*//*
let soma = 0
let alunos = []
let fim = false
while (!fim){
    let aluno = prompt('Digite o nome do estudante')
    let notas = Number(prompt('Digite a nota do estudante'))
    soma += notas
    if(aluno != null){
        alunos.push(aluno)
        alunos.push(notas)        
    } else {
        fim = true
    }
}
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}
console.log(`O somatório das notas é de ${soma}`)
console.log(alunos)


//let sum = 0
for(let i = 0; i < 20; i +=3){
    //sum += i
    console.log(i)
}
//console.log(sum)

let valores = [15, 89, 56, 78, 10, 69]
let soma = 0
for (const i of valores) {
    soma += i
}
console.log(soma)
*//*
let cidades = [
    {nome: 'Luanda', populacao: 8240360},
    {nome: 'Cabinda', populacao: 2420346},
    {nome: 'Zaire', populacao: 1320985},
    {nome: 'Benguela', populacao: 4562345},
    {nome: 'Uige', populacao: 6892745},
];
for (let nomesCidades of cidades) {
    if (nomesCidades.populacao > 3e6) {
        console.log(`${nomesCidades.nome} (${nomesCidades.populacao})`)
    }    
}
*/
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    //console.log(user.name); 
    console.log(`${user} --> ${user.name}`)
};
