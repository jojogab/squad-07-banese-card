function cadastrarAdm() {
    const nome = document.getElementById('nomeAdm').value;
    const cpf = document.getElementById('cpfAdm').value;
    const email = document.getElementById('emailAdm').value;
    const senha = document.getElementById('senhaAdm').value;

    const novoAdm = { nome, cpf, email, senha, tipo: 'adm' };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const cpfExistente = usuarios.find(usuario => usuario.cpf === cpf);
    if (cpfExistente) {
        alert("CPF já cadastrado. Por favor, utilize outro CPF.");
        return;
    }

    usuarios.push(novoAdm);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Cadastro de administrador realizado com sucesso!");
    window.location.href = "gerenciarUsuarios.html";
}