let campanhas = JSON.parse(localStorage.getItem('campanhas')) || [];

        function renderCampanhas() {
            const campanhasTable = document.getElementById('campanhasTable');
            campanhasTable.innerHTML = '';
            campanhas.forEach((campanha, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="border px-4 py-2 cursor-pointer text-blue-600 hover:text-blue-800" onclick="mostrarDetalhesCampanha(${index})">${campanha.nomeCampanha}</td>
                    <td class="border px-4 py-2">${campanha.tipoPremiacao}</td>
                    <td class="border px-4 py-2">${campanha.categoria}</td>
                `;
                campanhasTable.appendChild(row);
            });
        }

        function mostrarDetalhesCampanha(index) {
            const campanha = campanhas[index];
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

        renderCampanhas();