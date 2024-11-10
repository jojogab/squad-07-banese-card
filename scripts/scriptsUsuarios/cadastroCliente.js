function cadastrarCliente() {
    const nome = document.getElementById('nomeCliente').value;
    const cpf = document.getElementById('cpfCliente').value;
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