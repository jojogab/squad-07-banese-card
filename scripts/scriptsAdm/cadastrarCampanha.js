document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button.mt-6");

  button.addEventListener("click", function () {

      const nomeCampanha = document.querySelector("input[placeholder='Nome da campanha']").value;
      const tipoPremiacao = document.querySelector("select").value;
      const categoria = document.querySelectorAll("select")[1].value;
      const dataInicio = document.querySelector("input[placeholder='Data de início']").value;
      const dataTermino = document.querySelector("input[placeholder='Data de término']").value;
      const limiteQuantitativo = document.querySelector("input[placeholder='Limite quantitativo']").value;
      const mecanica = document.querySelectorAll("select")[2].value;
      const descricao = document.querySelector("input[placeholder='Descrição']").value;
      const valorMinimo = document.querySelector("input[placeholder='Valor Mínimo']").value;
      const modoEntrada = document.querySelector("input[placeholder='Modo de entrada:']").value;
      const mcc = document.querySelector("input[placeholder='MCC']").value;
      const cartoes = document.querySelector("input[placeholder='Cartões']").value;
      const estabelecimento = document.querySelector("input[placeholder='Estabelecimento:']").value;

      const novaCampanha = {
          nomeCampanha,
          tipoPremiacao,
          categoria,
          dataInicio,
          dataTermino,
          limiteQuantitativo,
          mecanica,
          informeExcessao: {
              blacklist: document.getElementById('blacklist').checked,
              whitelist: document.getElementById('whitelist').checked,
              descricao
          },
          valorMinimo,
          modoEntrada,
          mcc,
          cartoes,
          estabelecimento,
      };

      let campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];

      campanhas.push(novaCampanha);

      localStorage.setItem("campanhas", JSON.stringify(campanhas));

      document.querySelector("input[placeholder='Nome da campanha']").value = '';
      document.querySelector("select").value = '';
      document.querySelectorAll("select")[1].value = '';
      document.querySelector("input[placeholder='Data de início']").value = '';
      document.querySelector("input[placeholder='Data de término']").value = '';
      document.querySelector("input[placeholder='Limite quantitativo']").value = '';
      document.querySelectorAll("select")[2].value = '';
      document.querySelector("input[placeholder='Descrição']").value = '';
      document.querySelector("input[placeholder='Valor Mínimo']").value = '';
      document.querySelector("input[placeholder='Modo de entrada:']").value = '';
      document.querySelector("input[placeholder='MCC']").value = '';
      document.querySelector("input[placeholder='Cartões']").value = '';
      document.querySelector("input[placeholder='Estabelecimento:']").value = '';

      alert("Campanha adicionada com sucesso!");
  });
});
