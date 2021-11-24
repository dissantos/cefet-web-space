// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let calcularBotaoEl = document.querySelector('#calcular');

calcularBotaoEl.addEventListener('click', () => {
  const constGrav = document.querySelector('#constante').value;

  const massa1 = document.querySelector('#massa1').value;
  const massa2 = document.querySelector('#massa2').value;
  const distancia = document.querySelector('#distancia').value;
    
  const resultado = constGrav*massa1*massa2/(Math.pow(distancia,2));
    
  let resultadoElement = document.querySelector('#resultado');
    
  resultadoElement.value = resultado.toExponential(3);
})