
let inputCep = document.getElementById("cep");

/* com o  DOM adicionado, o evento so sera chamado apos a pagina carregar por completo, evitando problemas onde ele esteja sendo chamado/sendo executado antes do elemento-alvo sequer existir(como estava ocorrendo aqui) */

document.addEventListener("DOMContentLoaded", function () {

  /* aqui esta sendo adicionado um evento do tipo input (toda vez que o campo for alterado, ele dispara este evento), ou seja, sempre que mudar qualquer caracter, este evento sera chamado, entao, ao alterar/adicionar caracteres, sera criada uma constante que recebe o valor atual que esta no input, formata ele, utilizando a função "formataCep(aqui o valor atual do cep)", e devolve pro campo input o valor do cep formatado, e isso acontece multiplas vezes, aplicando a formatação por isso ocorre este processo automatico de formatar enquanto ainda digito  */ 
  inputCep.addEventListener("input", function (cepFormatado) {
      const valorCep = inputCep.value;

      cepFormatado = formataCep(valorCep);

      inputCep.value = cepFormatado;
    }
  );
});

function formataCep(cep) {
  cep = cep;

  // Remove todos os caracteres não numéricos
  cep = cep.replace(/\D/g, "");

  // Adiciona a máscara (xxxxx-xxx)
  cep = cep.replace(/^(\d{5})(\d{3})/, "$1-$2");

  return cep;
}

async function buscarCep() {
  event.preventDefault();

  const cep = document.getElementById("cep").value;

  // const cepFormatado = formataCep(cep);

  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  const dados = await resposta.json();

  const divConteudo = document.getElementById("conteudo");

  const divEnderecoUsuario = document.createElement("div");
  divEnderecoUsuario.id = "endereco-usuario";

  divConteudo.appendChild(divEnderecoUsuario);

  const logradouro = document.createElement("p");
  logradouro.textContent = `Logradouro: ${dados.logradouro}`;

  const complemento = document.createElement("p");
  // if(dados.complemento = ""){
  //   dados.complemento = "nenuhum complemento"
  // }
  complemento.textContent = `Complemento: ${dados.complemento}`;

  const bairro = document.createElement("p");
  bairro.textContent = `Bairro: ${dados.bairro}`;

  const localidade = document.createElement("p");
  localidade.textContent = `Localidade: ${dados.localidade}`;

  const uf = document.createElement("p");
  uf.textContent = `UF: ${dados.uf}`;

  const ddd = document.createElement("p");
  ddd.textContent = `DDD: ${dados.ddd}`;

  const separaCeps = document.createElement("hr");

  divConteudo.appendChild(logradouro);
  divConteudo.appendChild(complemento);
  divConteudo.appendChild(bairro);
  divConteudo.appendChild(uf);
  divConteudo.appendChild(ddd);
  divConteudo.appendChild(separaCeps);
}
