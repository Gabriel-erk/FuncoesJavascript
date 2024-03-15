async function buscarCep() {

  event.preventDefault();

  const cep = document.getElementById('cep').value;

  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  const dados = await resposta.json();

  const divConteudo = document.getElementById('conteudo');

  const divEnderecoUsuario = document.createElement('div');
  divEnderecoUsuario.id = "endereco-usuario";

  divConteudo.appendChild(divEnderecoUsuario);

  const logradouro = document.createElement('p');
  logradouro.textContent = `Logradouro: ${dados.logradouro}`;

  const complemento = document.createElement('p');
  // if(dados.complemento = ""){
  //   dados.complemento = "nenuhum complemento"
  // }
  complemento.textContent = `Complemento: ${dados.complemento}`;
  
  const bairro = document.createElement('p');
  bairro.textContent = `Bairro: ${dados.bairro}`;

  const localidade = document.createElement('p');
  localidade.textContent = `Localidade: ${dados.localidade}`;

  const uf = document.createElement('p');
  uf.textContent = `UF: ${dados.uf}`;

  const ddd = document.createElement('p');
  ddd.textContent = `DDD: ${dados.ddd}`;
  
  const separaCeps = document.createElement('hr');

  divConteudo.appendChild(logradouro);
  divConteudo.appendChild(complemento);
  divConteudo.appendChild(bairro);
  divConteudo.appendChild(uf);
  divConteudo.appendChild(ddd);
  divConteudo.appendChild(separaCeps);

}