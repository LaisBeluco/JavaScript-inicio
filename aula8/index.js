/*
Lais Beluco Marba tem 19 anos, pesa 70 kg
tem 1.6 de altura e seu IMC é de ???
Lais nasceu em 2002
*/
const nome = 'Lais';
const sobrenome = 'Beluco Marba';
const idade = 19;
const peso = 70;
const alturaEmM = 1.60; // Corrigido para metros (ao invés de cm)
let imc = peso/(alturaEmM*alturaEmM); // peso / (altura * altura)
let anoNascimento = 2021-idade;

//template strings

console.log(`${nome},${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

//Forma mais complicada de escrever um código º~º

/*console.log(nome,sobrenome,'tem', idade,"anos,","pesa", peso,"kg",'tem',alturaEmM,"de altura",'e seu IMC é de', imc);
console.log(nome,'nasceu em', anoNascimento);*/