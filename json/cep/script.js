async function buscarCep() {
  /* função que evita que o javascript recarregue a pagina ao clicar no botao, isto acontce por causa do formulario */
  event.preventDefault();
  // Obtém o valor do CEP do campo de entrada
  const cep = document.getElementById('cep').value;

  // Faz uma solicitação para a API ViaCEP usando o CEP fornecido
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // Converte a resposta da solicitação para JSON
    .then(response => response.json())
    // Manipula os dados retornados pela API ViaCEP
    .then(data => {
      // Verifica se não há erro na resposta
      if (!data.erro) {
        // Preenche os campos do formulário com os dados do endereço
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('complemento').value = data.complemento;
        
        if(data.complemento == ''){
          document.getElementById('complemento').value = "nenhum";
        }
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('localidade').value = data.localidade;
        document.getElementById('UF').value = data.uf;
        document.getElementById('DDD').value = data.ddd;
      } else {
        // Se houver erro, exibe uma mensagem de alerta informando que o CEP não foi encontrado
        alert('CEP não encontrado');
      }
    })
    // Captura e trata quaisquer erros que possam ocorrer durante a solicitação
    .catch(error => console.error('Erro ao buscar endereço:', error));
}