async function buscarCep() {
 
  event.preventDefault();
  
  const cep = document.getElementById('cep').value;


  const resposta =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    
    const dados = await resposta.json();
    
    const enderecoUsuario = document.getElementById('endereco-usuario');
    
    dados.forEach(function (cep) {
      const  infoUsuario = document.createElement('p');
      infoUsuario.textContent = `Logradouro: ${cep.logradouro}`;
      enderecoUsuario.appendChild(infoUsuario);

    });
}