// Adiciona "escutadores de evento" assim que o documento HTML é carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Encontra os campos pelos seus IDs
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    // Aplica as máscaras enquanto o usuário digita
    if (inputCPF) {
        inputCPF.addEventListener('keyup', mascaraCPF);
    }
    
    if (inputTelefone) {
        inputTelefone.addEventListener('keyup', mascaraTelefone);
    }

    if (inputCEP) {
        inputCEP.addEventListener('keyup', mascaraCEP);
    }
});


// Funções de Máscara

function mascaraCPF(event) {
    let input = event.target;
    let v = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o terceiro dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o sexto dígito
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen antes dos últimos 2 dígitos
    input.value = v.slice(0, 14); // Limita ao tamanho máximo do CPF formatado
}

function mascaraTelefone(event) {
    let input = event.target;
    let v = input.value.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses nos dois primeiros dígitos
    v = v.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o quinto dígito (para celular)
    input.value = v.slice(0, 15); // Limita ao tamanho (99) 99999-9999
}

function mascaraCEP(event) {
    let input = event.target;
    let v = input.value.replace(/\D/g, '');
    v = v.replace(/^(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o quinto dígito
    input.value = v.slice(0, 9); // Limita ao tamanho 99999-999
}