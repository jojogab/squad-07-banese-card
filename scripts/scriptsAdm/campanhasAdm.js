let currentEditIndex = null; 

function loadCampanhas() {
    const storedCampanhas = localStorage.getItem('campanhas');
    return storedCampanhas ? JSON.parse(storedCampanhas) : [];
}

let campanhas = loadCampanhas();

function renderCampanhas() {
    const campanhasTable = document.getElementById('campanhasTable');
    campanhasTable.innerHTML = '';
    campanhas.forEach((campanha, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${campanha.nomeCampanha}</td>
            <td class="border px-4 py-2">${campanha.tipoPremiacao}</td>
            <td class="border px-4 py-2">${campanha.categoria}</td>
            <td class="border px-4 py-2">${campanha.dataInicio}</td>
            <td class="border px-4 py-2">${campanha.dataTermino}</td>
            <td class="border px-4 py-2 flex space-x-2">
                <button onclick="editCampanha(${index})" class="text-blue-500 hover:text-blue-700">Editar</button>
                <button onclick="deleteCampanha(${index})" class="text-red-500 hover:text-red-700">Excluir</button>
            </td>
        `;
        campanhasTable.appendChild(row);
    });
}

function editCampanha(index) {
    const campanha = campanhas[index];
    document.getElementById('nomeCampanha').value = campanha.nomeCampanha;
    document.getElementById('tipoPremiacao').value = campanha.tipoPremiacao;
    document.getElementById('categoria').value = campanha.categoria;
    document.getElementById('dataInicio').value = campanha.dataInicio;
    document.getElementById('dataTermino').value = campanha.dataTermino;
    document.getElementById('limiteQuantitativo').value = campanha.limiteQuantitativo;
    document.getElementById('mecanica').value = campanha.mecanica;
    document.getElementById('informeExcessao').value = campanha.informeExcessao;
    document.getElementById('valorMinimo').value = campanha.valorMinimo;
    document.getElementById('modoEntrada').value = campanha.modoEntrada;
    document.getElementById('mcc').value = campanha.mcc;
    document.getElementById('cartoes').value = campanha.cartoes;
    document.getElementById('estabelecimento').value = campanha.estabelecimento;

    currentEditIndex = index; 
    document.getElementById('campanhaFormModal').classList.remove('hidden');
}

function saveEditedCampanha() {
    if (currentEditIndex === null) return;

    campanhas[currentEditIndex].nomeCampanha = document.getElementById('nomeCampanha').value;
    campanhas[currentEditIndex].tipoPremiacao = document.getElementById('tipoPremiacao').value;
    campanhas[currentEditIndex].categoria = document.getElementById('categoria').value;
    campanhas[currentEditIndex].dataInicio = document.getElementById('dataInicio').value;
    campanhas[currentEditIndex].dataTermino = document.getElementById('dataTermino').value;
    campanhas[currentEditIndex].limiteQuantitativo = document.getElementById('limiteQuantitativo').value;
    campanhas[currentEditIndex].mecanica = document.getElementById('mecanica').value;
    campanhas[currentEditIndex].informeExcessao = document.getElementById('informeExcessao').value;
    campanhas[currentEditIndex].valorMinimo = document.getElementById('valorMinimo').value;
    campanhas[currentEditIndex].modoEntrada = document.getElementById('modoEntrada').value;
    campanhas[currentEditIndex].mcc = document.getElementById('mcc').value;
    campanhas[currentEditIndex].cartoes = document.getElementById('cartoes').value;
    campanhas[currentEditIndex].estabelecimento = document.getElementById('estabelecimento').value;

    localStorage.setItem('campanhas', JSON.stringify(campanhas));
    renderCampanhas();
    closeForm();
}

function closeForm() {
    document.getElementById('campanhaFormModal').classList.add('hidden');
    currentEditIndex = null; 
}

function deleteCampanha(index) {
    campanhas.splice(index, 1);
    localStorage.setItem('campanhas', JSON.stringify(campanhas));
    renderCampanhas();
}

renderCampanhas();