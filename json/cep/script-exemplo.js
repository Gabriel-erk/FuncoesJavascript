async function buscarEndereco() {
  
  event.preventDefault();
  const estado = document.getElementById('estado').value;
  const cidade = document.getElementById('cidade').value;
  const logradouro = document.getElementById('logradouro').value;
  // viacep.com.br/ws/RS/Porto Alegre/Domingos/json/
//  const url = `https://viacep.com.br/ws/${estado}/${cidade}/${logradouro}/json/`
  // const resposta = await fetch(url);
  const resposta = await fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${logradouro}/json/`);
   const dadosUser = await resposta.json();

   dadosUser.forEach(async function (info){
    document.getElementById('cep').value = info.cep;
    document.getElementById('complemento').value = info.complemento;
    document.getElementById('bairro').value = info.bairro;
    document.getElementById('localidade').value = info.localidade;
    document.getElementById('UF').value = info.uf;
    document.getElementById('DDD').value = info.ddd;
   });
  
}
