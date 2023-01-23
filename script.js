var botaoIniciar = document.getElementById("start-button");
botaoIniciar.addEventListener("click", function () {
    var conteudoEscondido = document.getElementById("hidden-content");
    conteudoEscondido.style.display = "block";
    var caixaInicial = document.querySelector('.caixa-1');
    var caixaSegunda = document.querySelector('.caixa-2');
    var caixaTerceira = document.querySelector('.caixa-3')
    caixaInicial.classList.add("esconder");
    caixaTerceira.classList.add("esconder");
    caixaSegunda.classList.remove("esconder");
})

function validateInputs() {
    var inputs = document.querySelectorAll('.input-1, .input-2, .input-3, .input-4');
    var inputsCompleted = true;
    inputs.forEach(function (input) {
        if (!input.value) {
            inputsCompleted = false;
        }
    });
    return inputsCompleted;
}

function calcular() {
    if (validateInputs()) {
        // código a ser executado se todos os inputs estiverem preenchidos
        var caixaSegunda = document.querySelector('.caixa-2');
        var caixaTerceira = document.querySelector('.caixa-3')
        caixaSegunda.classList.add('esconder')
        caixaTerceira.classList.remove('esconder')
        var res = document.querySelector('.caixa-3')

        var investimento_inicial = document.getElementById('investimento_inicial')
        var investimento_mensal = document.getElementById('investimento_mensal')
        var tempo = document.getElementById('tempo')
        var valjuros = document.getElementById('juros')
        var juros = Number(valjuros.value) / 100
        var n1 = Number(investimento_inicial.value)
        var n2 = Number(investimento_mensal.value)
        var n3 = Number(tempo.value)
        var etapa_1 = (1 + juros) ** n3
        var etapa_2 = (etapa_1 - 1) / juros
        var etapa_3 = 1 + juros
        var resultado = n1 + n2 * (etapa_2 * etapa_3)
        var investido = n1 + (n2 * n3)
        var totalinvestido = resultado - investido
        res.innerHTML = `<p>${resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <p>${investido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <p>${totalinvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        `
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}