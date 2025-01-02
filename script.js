const caixaSegunda = document.querySelector('.caixa-2');
const caixaTerceira = document.querySelector('.caixa-3');
const outro = document.getElementById("outro");
const inputs = document.querySelectorAll('.input-1, .input-2, .input-3, .input-4');

caixaSegunda.classList.remove('esconder');
caixaTerceira.classList.add('esconder');

function validateInputs() {
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
        caixaSegunda.classList.add('esconder')
        caixaTerceira.classList.remove('esconder')
        var res_1 = document.querySelector('.valor-1')
        var res_2 = document.querySelector('.valor-2')
        var res_3 = document.querySelector('.valor-3')

        var juros = Number(document.getElementById('juros').value) / 100;
        var n1 = Number(document.getElementById('investimento_inicial').value);
        var n2 = Number(document.getElementById('investimento_mensal').value);
        var n3 = Number(document.getElementById('tempo').value);
        var etapa_1 = (1 + juros) ** n3;
        let resultado = n1 + n2 * ((etapa_1 - 1) / juros * (1 + juros));
        let investido = n1 + (n2 * n3);
        let totalinvestido = resultado - investido;

        res_1.innerHTML = `<h1>Valor total final</h1>
        <h2>${resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>`;
        res_2.innerHTML = `<h1>Valor total investido</h1>
        <h2>${investido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>`;
        res_3.innerHTML = `<h1>Total em juros</h1>
        <h2>${totalinvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>`

        const ctx = document.getElementById('grafico')
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Investido',
                    'Juros'
                ],
                datasets: [{
                    label: 'Valor',
                    data: [investido.toFixed(2), totalinvestido.toFixed(2)],
                    backgroundColor: [
                        'blue',
                        'green'
                    ],
                }],
            }
        })
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

outro.addEventListener("click", function () {
    location.reload()
})