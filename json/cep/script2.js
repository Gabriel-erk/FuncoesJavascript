async function buscarEndereco() {
  /* função que evita que o javascript recarregue a pagina ao clicar no botao, isto acontce por causa do formulario */
  event.preventDefault();
  const estado = document.getElementById('estado').value;
  const cidade = document.getElementById('cidade').value;
  const logradouro = document.getElementById('logradouro').value;
  fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${logradouro}/json/`)
   
  .then(response => response.json())
  .then(data => {
    if(!data.erro) {
      document.getElementById('cep').value = data.cep;
      document.getElementById('complemento').value = data.complemento;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('localidade').value = data.localidade;
      document.getElementById('UF').value = data.uf;
      document.getElementById('DDD').value = data.ddd;
    }
    else {
      alert('Endereço não encontrado')
    }
  })
  .catch(error => console.error('erro ao buscar endereço', error))
}
