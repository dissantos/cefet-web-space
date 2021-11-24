// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botoesExpandirRetrair = document.querySelectorAll('.botao-expandir-retrair');

for (let botaoExpandirRetrairEl of botoesExpandirRetrair) {
	botaoExpandirRetrairEl.addEventListener('click', (e) => {

		if (e.currentTarget.innerHTML === '-') {
			e.currentTarget.innerHTML = '+';
		} else {
			e.currentTarget.innerHTML = '-';
		}

		let paragrafoPaiEl =  e.currentTarget.parentNode;

		paragrafoPaiEl.classList.toggle('expandido');
	})
}