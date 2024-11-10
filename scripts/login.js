function login() {
    const cpf = document.getElementById('loginCpf').value;
    const senha = document.getElementById('loginSenha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(usuario => usuario.cpf === cpf && usuario.senha === senha);

    if (usuarioEncontrado) {
        if (usuarioEncontrado.tipo === 'adm') {
            window.location.href = "./Adm/campanhasAdm.html";
        } else if (usuarioEncontrado.tipo === 'cliente') {
            window.location.href = "./Cliente/dashbordCliente.html";
        }
    } else {
        alert("CPF ou senha incorretos.");
    }
}