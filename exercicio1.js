// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let calcularBotaoEl = document.querySelector('#calcular');

calcularBotaoEl.addEventListener('click', () => {
    const const_grav = document.querySelector('#constante').value;

    let massa1 = document.querySelector('#massa1').value;
    let massa2 = document.querySelector('#massa2').value;
    let distancia = document.querySelector('#distancia').value;
    
    let resultado = const_grav*massa1*massa2/(Math.pow(distancia,2));
    
    let resultadoElement = document.querySelector('#resultado');
    
    resultadoElement.value = resultado.toExponential(3);
})