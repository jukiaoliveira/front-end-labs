const display = document.querySelector('input[type=tel]');

const teclas = document.querySelectorAll('input[type=button]');

// tarefa: criar uma condição para travar e não passar de 14 digitos
function valorTeclasToDisplay (i) {
    display.value += teclas[i].value;
}

for(let i = 0; i < teclas.length; i++) {
    teclas[i].onclick = () => {
        valorTeclasToDisplay(i);
    }
}

teclas[i].onclick = () => {
    valorTeclasToDisplay(i);
}

const limpar = document.querySelector('.icon');

limpar.onclick = () => {
    const opcao = confirm("Deseja limpar o campo?")
    if (opcao) {
        display.value = '';
    }
}