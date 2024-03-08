async function buscarCep() {
  const respostaCep = await fetch("https://viacep.com.br/ws/01001000/json/");

  const dadosCep = await respostaCep.json();
  const cepUsuario = document.getElementById("cep");
  
}
