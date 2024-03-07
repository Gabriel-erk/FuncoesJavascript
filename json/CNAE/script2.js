document.addEventListener("DOMContentLoaded", async function(){
    const principal = document.getElementById("cnae-id");
    const listaObservacao = document.getElementById("cnae-obs")

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes');

    const dados = await resposta.json();

    // dados.forEach(function(cnae) {
    //     const ids = document.createElement('h3');
    //     ids.textContent = `CNAE: ${cnae.id} - ${cnae.descricao}`;
        
    //     principal.appendChild(ids);
    // });

    
})