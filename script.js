const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
}

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal())
})

function calcular() {
    var investimento_inicial = document.getElementById('investimento_inicial')
    var investimento_mensal = document.getElementById('investimento_mensal')
    var tempo = document.getElementById('tempo')
    var valjuros = document.getElementById('juros')
    var juros = Number(valjuros.value)/100
    var res = window.document.getElementById('modal-body')
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
    <a1>Valor total final<br><aa1>${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</aa1></a1>
    <a2>Valor total investido<br><aa2>${investido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</aa2></a2>
    <a3>Valor em juros<br></aa3><aa3>${totalinvestido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</aa3></a3>`
    const ctx = document.getElementById('myChart')
  
    let v1 = investido
    let v2 = totalinvestido
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Investido',
          'Juros'
        ],
        datasets: [{
          label: 'Valor',
          data: [v1, v2],
          backgroundColor: [
      'rgb(228, 63, 63)',
      'rgb(68, 0, 255)'
    ],
        }],
      }
    })

  }