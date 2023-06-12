//Questao 1
function isPrime(number) {

    //Utilizar a função acima para saber se o número apresentado é primo
if (number < 2) {
    return false
}

//Neste ponto, deve-se verificar se o número em questão é divisível ou não por dois
for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        return false;
    }
}

//Após verificar que o número em questão não é divisível por nenhum outro número além de 1 ou ele mesmo, pode-se concluir que o mesmo é um número primo

return true;


//Um simples exmeplo de uso seria o seguinte:

console.log(isPrime(17));  //VERDADE (Pode-se concluir isso, pois: 17, não é divisível por nenhum outro número a não ser ele mesmo e 1.);
console.log(isPrime(15));  //FALSO (Pode-se concluir isso, pois: 15, é divisível por outros números como 3 e 5, além de também ser divisível por 1, claramente. Contudo, número primo como antes dito é somente aquele número cujo o mesmo só pode ser divisível por ele mesmo ou 1.);
};

//Qiuestao 2
function verificarSenha() {
    let senha = prompt("Insira a senha:"); 
  
    let mensagemTamanho = "A senha deverá conter pelo menos 8 caracteres.";
    let mensagemMaiuscula = "A senha deverá conter pelo menos uma letra maiúscula.";
    let mensagemMinuscula = "A senha deverá conter pelo menos uma letra minúscula.";
    let mensagemNumero = "A senha deverá conter pelo menos um número.";
  
    if (senha.length < 8) {
      alert(mensagemTamanho); 
    } else if (!/[A-Z]/.test(senha)) {
      alert(mensagemMaiuscula); 
    } else if (!/[a-z]/.test(senha)) {
      alert(mensagemMinuscula); 
    } else if (!senha.match(/[0-9]/)) {
      alert(mensagemNumero); 
    } else {
      alert("A senha é válida!"); 
    }
  }
  
  verificarSenha();
function verificarSenha() {
    let senha = prompt("Insira a senha:"); 
  
    let mensagemTamanho = "A senha deve ter pelo menos 8 caracteres.";
    let mensagemMaiuscula = "A senha deve conter pelo menos uma letra maiúscula.";
    let mensagemMinuscula = "A senha deve conter pelo menos uma letra minúscula.";
    let mensagemNumero = "A senha deve conter pelo menos um número.";
  
    if (senha.length < 8) {
      alert(mensagemTamanho); 
    } else if (!/[A-Z]/.test(senha)) {
      alert(mensagemMaiuscula); 
    } else if (!/[a-z]/.test(senha)) {
      alert(mensagemMinuscula); 
    } else if (!senha.match(/[0-9]/)) {
      alert(mensagemNumero); 
    } else {
      alert("A senha é válida!"); 
    }
  }

  verificarSenha();

  //Questao 3
  //Podemos verificar qual o fatorial de um número o inserindo nesta função, a função irá utilizar do número para determinar sseu fatorial  

  function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize(5);

  function factorialize(num) {
    // Se num = 0 OU num = 1, o fatorial retornará 1
    if (num === 0 || num === 1)
      return 1;
    
    // Caso seja utilizado "FOR" loop com i = 5, por exemplo
    // Diminuí-se i em uma unidade após cada iteração 
    for (var i = num - 1; i >= 1; i--) {
      // Aqui será armazenado o valor de num em cada iteração
      num = num * i; // ou num *= i;
      /* 
                   num    var i = num - 1   num *= i         i--       i >= 1?
      1ª iteração:   5    4 = 5 - 1         20 = 5 * 4        3          sim   
      2ª iteração:  20    3 = 4 - 1         60 = 20 * 3       2          sim
      3ª iteração:  60    2 = 3 - 1        120 = 60 * 2       1          sim  
      4ª iteração: 120    1 = 2 - 1        120 = 120 * 1      0          não 
      5ª iteração: 120    0                120
      Fim do "FOR" 
      */
    }
    return num; //120
  }
  factorialize(5);

//Questao 4 
  function verificarumquadradoperfeito() {
var numero = prompt("utiliza um número neste campo para saber se o msmo é ou não um quadrado perfeito")
var raizQuadrada = Math.sqrt(numero);
if (Math.floor(raizQuadrada) === raizQuadrada) {
    alert("O numero é um quadrado perfeito");
    } else {
        alert("O nmero designado não é um quadrado perfeito");
    }
}

verificarumquadradoperfeito();