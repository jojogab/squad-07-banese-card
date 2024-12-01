function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    input.value = value;
}

function cadastrarCliente() {
    const nome = document.getElementById('nomeCliente').value.trim();
    const cpf = document.getElementById('cpfCliente').value.replace(/\D/g, '').trim(); 
    const email = document.getElementById('emailCliente').value.trim();
    const senha = document.getElementById('senhaCliente').value.trim();

    if (!nome || !cpf || !email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!validarCPF(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        return;
    }

    const novoCliente = { nome, cpf, email, senha, tipo: 'cliente' };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const cpfExistente = usuarios.find(usuario => usuario.cpf === cpf);
    if (cpfExistente) {
        alert("CPF já cadastrado. Por favor, utilize outro CPF.");
        return;
    }

    usuarios.push(novoCliente);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Cadastro de cliente realizado com sucesso!");
    window.location.href = "gerenciarUsuarios.html";
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.substring(10, 11));
}
