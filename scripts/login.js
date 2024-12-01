function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    input.value = value;
}

function login() {
    const cpfInput = document.getElementById('loginCpf').value.replace(/\D/g, '').trim();
    const senhaInput = document.getElementById('loginSenha').value.trim();

    if (!cpfInput || !senhaInput) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(usuario => usuario.cpf === cpfInput && usuario.senha === senhaInput);

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
