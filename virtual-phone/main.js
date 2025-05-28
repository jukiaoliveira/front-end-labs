const display = document.querySelector('input[type=tel]');
const teclas = document.querySelectorAll('input[type=button]');
const limpar = document.querySelector('.icon');

function valorTeclasToDisplay(i) {
    if (display.value.length <= 14) { 
        display.value += teclas[i].value;
    } else {
        alert("Chegou no limite de digitos!");
    }
}

// Associa o evento de clique a cada tecla
for (let i = 0; i < teclas.length; i++) {
    teclas[i].onclick = () => {
        valorTeclasToDisplay(i);
    }
}

// Evento para limpar o display
limpar.onclick = () => {
    const opcao = confirm("Tem certeza que deseja limpar o display?");
    if (opcao) {
        display.value = '';
    }
}