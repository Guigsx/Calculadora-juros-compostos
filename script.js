function calcular() {
    var investimento_inicial = document.getElementById('investimento_inicial')
    var investimento_mensal = document.getElementById('investimento_mensal')
    var tempo = document.getElementById('tempo')
    var valjuros = document.getElementById('juros')
    var juros = Number(valjuros.value)/100
    var res = window.document.getElementById('resultado')
    var n1 = Number(investimento_inicial.value)
    var n2 = Number(investimento_mensal.value)
    var n3 = Number(tempo.value)
    var etapa_1 = (1 + juros) ** n3
    var etapa_2 = (etapa_1 - 1) / juros
    var etapa_3 = 1 + juros
    var resultado = n1 + n2 * (etapa_2 * etapa_3)
    var investido = n1 + (n2 * n3) 
    var totalinvestido = resultado - investido
    res.innerHTML = `
<h1>Resultado:</h1>
<p>Valor total final: ${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
<p>Valor total investido:  ${investido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
<p>Valor total em juros: ${totalinvestido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
`
}