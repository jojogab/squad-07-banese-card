let campanhas = JSON.parse(localStorage.getItem('campanhas')) || [];
let inscricoes = JSON.parse(localStorage.getItem('inscricoesCliente')) || [];
let currentAction = null;
let currentCampanhaIndex = null;

function renderCampanhasDisponiveis() {
    const campanhasDisponiveisTable = document.getElementById('campanhasDisponiveisTable');
    campanhasDisponiveisTable.innerHTML = '';
    campanhas.forEach((campanha, index) => {
        const inscrito = inscricoes.some(inscricao => inscricao.nomeCampanha === campanha.nomeCampanha);
        if (!inscrito) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="border px-4 py-2 cursor-pointer text-blue-600 hover:text-blue-800" onclick="mostrarDetalhesCampanha(${index})">${campanha.nomeCampanha}</td>
                <td class="border px-4 py-2">${campanha.tipoPremiacao}</td>
                <td class="border px-4 py-2">${campanha.categoria}</td>
                <td class="border px-4 py-2">
                    <button onclick="confirmarInscricao(${index})" class="text-blue-500 hover:text-blue-700">Inscrever-se</button>
                </td>
            `;
            campanhasDisponiveisTable.appendChild(row);
        }
    });
}

function renderInscricoes() {
    const inscricoesTable = document.getElementById('inscricoesTable');
    inscricoesTable.innerHTML = '';
    inscricoes.forEach((inscricao, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2 cursor-pointer text-blue-600 hover:text-blue-800" onclick="mostrarDetalhesCampanha(null, ${index})">${inscricao.nomeCampanha}</td>
            <td class="border px-4 py-2">${inscricao.tipoPremiacao}</td>
            <td class="border px-4 py-2">${inscricao.categoria}</td>
            <td class="border px-4 py-2">
                <button onclick="confirmarDesinscricao(${index})" class="text-red-500 hover:text-red-700">Desinscrever-se</button>
            </td>
        `;
        inscricoesTable.appendChild(row);
    });
}

function openPopup(message, action, index) {
    document.getElementById('confirmMessage').innerText = message;
    currentAction = action;
    currentCampanhaIndex = index;
    document.getElementById('confirmPopup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('confirmPopup').classList.add('hidden');
    currentAction = null;
    currentCampanhaIndex = null;
}

function confirmAction() {
    if (currentAction && currentCampanhaIndex !== null) {
        currentAction(currentCampanhaIndex);
        closePopup();
    }
}

function confirmarInscricao(index) {
    openPopup("Deseja realmente se inscrever nesta campanha?", inscreverCliente, index);
}

function confirmarDesinscricao(index) {
    openPopup("Deseja realmente se desinscrever desta campanha?", desinscreverCliente, index);
}

function inscreverCliente(index) {
    inscricoes.push(campanhas[index]);
    localStorage.setItem('inscricoesCliente', JSON.stringify(inscricoes));
    renderCampanhasDisponiveis();
    renderInscricoes();
}

function desinscreverCliente(index) {
    inscricoes.splice(index, 1);
    localStorage.setItem('inscricoesCliente', JSON.stringify(inscricoes));
    renderCampanhasDisponiveis();
    renderInscricoes();
}

function mostrarDetalhesCampanha(campanhaIndex = null, inscricaoIndex = null) {
    const campanha = campanhaIndex !== null ? campanhas[campanhaIndex] : inscricoes[inscricaoIndex];
    const detalhesConteudo = document.getElementById('detalhesConteudo');
    detalhesConteudo.innerHTML = `
        <p><strong>Nome:</strong> ${campanha.nomeCampanha}</p>
        <p><strong>Tipo de Premiação:</strong> ${campanha.tipoPremiacao}</p>
        <p><strong>Categoria:</strong> ${campanha.categoria}</p>
        <p><strong>Descrição:</strong> ${campanha.informeExcessao.descricao}</p>
        <p><strong>Data de Início:</strong> ${campanha.dataInicio}</p>
        <p><strong>Data de Término:</strong> ${campanha.dataTermino}</p>
    `;
    document.getElementById('detalhesCampanhaModal').classList.remove('hidden');
}

function closeDetalhesModal() {
    document.getElementById('detalhesCampanhaModal').classList.add('hidden');
}

renderCampanhasDisponiveis();
renderInscricoes();