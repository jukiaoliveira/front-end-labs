const gitHubId = document.querySelector('input[type=text]');
const btnBuscar = document.querySelector('button');
//token passado apenas para fins de teste, não deve ser usado em produção
const headers = { };
fetch('https://api.github.com/users' + gitHubId.value, {headers})
.then(response => {
    if (!response.ok){
        return response.json();
    } else {
        if(response.status === 404) {
            alert('Usuário' + gitHubId.value + ' não existe');
            throw new Error('Usuário não encontrado');
        } else {
            alert('Erro de execução, tente mais tarde');
            throw new Error('Erro de execução');
        }
    }
})