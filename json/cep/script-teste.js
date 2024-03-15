async function buscarCep() {
 
  event.preventDefault();
  
  const estado = document.getElementById('estado').value;
  const cidade = document.getElementById('cidade').value;
  const logradouro = document.getElementById('logradouro').value;


  const resposta =  await fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${logradouro}/json/`)
    
    const dados = await resposta.json();
    
    const enderecoUsuario = document.getElementById('endereco-usuario');
    
    dados.forEach(function (info) {

      const logradouroUsuario = document.createElement('p');
      logradouroUsuario.textContent = `CEP: ${info.cep}`;

      const complementoUsuario = document.createElement('p');
      complementoUsuario.textContent = `Complemento: ${info.complemento}`

      const bairroUsuario = document.createElement('p');
      bairroUsuario.textContent = `Bairro: ${info.bairro}`

      const localidadeUsuario = document.createElement('p');
      localidadeUsuario.textContent = `Localidade: ${info.localidade}`

      const ufUsuario = document.createElement('p');
      ufUsuario.textContent = `Bairro: ${info.uf}`

      const dddUsuario = document.createElement('p');
      dddUsuario.textContent = `DDD: ${info.ddd}`

      const divisaoDeLinha = document.createElement('hr');

      enderecoUsuario.appendChild(logradouroUsuario);
      enderecoUsuario.appendChild(complementoUsuario);
      enderecoUsuario.appendChild(bairroUsuario);
      enderecoUsuario.appendChild(localidadeUsuario);
      enderecoUsuario.appendChild(ufUsuario);
      enderecoUsuario.appendChild(divisaoDeLinha);
    });
}