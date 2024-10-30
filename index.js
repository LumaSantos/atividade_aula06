// Inserir um ciclo no simulador 


function calcularJuros() {
    let numero;
    let parcelas;

    while (true) {
        numero = parseInt(prompt("Insira o valor do produto:"));
        if (numero > 0) break;
        alert("Por favor, insira um número válido!"); 
    }

    while (true) {
        parcelas = parseInt(prompt("Insira a quantidade de parcelas:"));
        if (parcelas > 0) break; 
        alert("Por favor, insira um número de parcelas válido"); 
    }

    let taxaDeJuros = 0.025; // 2,5% como decimal
    let resultado;

    // Cálculo do valor da parcela com juros
    resultado = (numero * (1 + taxaDeJuros * parcelas)) / parcelas;

    alert("O valor da parcela é " + resultado);
}

calcularJuros();
