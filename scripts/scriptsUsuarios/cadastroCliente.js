function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    input.value = value;
}

function cadastrarCliente() {
    const nome = document.getElementById('nomeCliente').value;
    const cpf = document.getElementById('cpfCliente').value.replace(/\D/g, '');
    const email = document.getElementById('emailCliente').value;
    const senha = document.getElementById('senhaCliente').value;

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