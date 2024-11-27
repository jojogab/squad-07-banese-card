let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let usuarioEditIndex = null;

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function removerFormatacaoCPF(cpf) {
    return cpf.replace(/\D/g, '');
}

function renderUsuarios() {
    const usuariosTable = document.getElementById('usuariosTable');
    usuariosTable.innerHTML = '';
    usuarios.forEach((usuario, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${usuario.nome}</td>
            <td class="border px-4 py-2">${formatarCPF(usuario.cpf)}</td>
            <td class="border px-4 py-2">${usuario.email}</td>
            <td class="border px-4 py-2">${usuario.tipo}</td>
            <td class="border px-4 py-2 flex space-x-2">
                <button onclick="editarUsuario(${index})" class="text-blue-500 hover:text-blue-700">Editar</button>
                <button onclick="deletarUsuario(${index})" class="text-red-500 hover:text-red-700">Excluir</button>
            </td>
        `;
        usuariosTable.appendChild(row);
    });
}

function editarUsuario(index) {
    const usuario = usuarios[index];
    usuarioEditIndex = index;
    document.getElementById('nomeUsuario').value = usuario.nome;
    document.getElementById('cpfUsuario').value = formatarCPF(usuario.cpf);
    document.getElementById('emailUsuario').value = usuario.email;
    document.getElementById('senhaUsuario').value = usuario.senha;
    document.getElementById('tipoUsuario').value = usuario.tipo;
    document.getElementById('usuarioModal').classList.remove('hidden');
}

function salvarEdicaoUsuario() {
    const nome = document.getElementById('nomeUsuario').value;
    const cpf = removerFormatacaoCPF(document.getElementById('cpfUsuario').value); 
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('senhaUsuario').value;
    const tipo = document.getElementById('tipoUsuario').value;

    usuarios[usuarioEditIndex] = { nome, cpf, email, senha, tipo };
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    renderUsuarios();
    closeUsuarioModal();
}

function deletarUsuario(index) {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
        usuarios.splice(index, 1);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        renderUsuarios();
    }
}

function closeUsuarioModal() {
    document.getElementById('usuarioModal').classList.add('hidden');
    usuarioEditIndex = null;
}

renderUsuarios();