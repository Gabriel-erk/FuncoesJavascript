document.addEventListener("DOMContentLoaded", async function () {
  const principal = document.getElementById("cnae-id");
  const listaObservacao = document.getElementById("cnae-obs");

  const resposta = await fetch(
    "https://servicodados.ibge.gov.br/api/v2/cnae/classes"
  );

  const dados = await resposta.json();

  dados.forEach(function (cnae) {
    const ids = document.createElement("h3");
    ids.textContent = `CNAE: ${cnae.id} - ${cnae.descricao}`;

    principal.appendChild(ids);

    const observacao = cnae.observacoes;

    // observacao.forEach(function (obsResultado) {
    //   const obsR = obsResultado;
      
    //   for(const descricao in obsR){
    //     const liObs = document.createElement("li");
    //     liObs.textContent = `${obsR[descricao]}`;
        
    //   };

    // //   listaObservacao.appendChild(liObs);
    // //   const liObs = document.createElement("li");
    // //   liObs.textContent = `${obsR}`;
    // //   listaObservacao.appendChild(liObs);
    // });

    // const observacao = document.createElement('li');
    // observacao.textContent = `${cnae.observacoes}`;

    // listaObservacao.appendChild(observacao);

    // const dadosArray = dados.cnae.observacoes;

    // dadosArray.forEach(function())
    // const li = document.createElement('li');
    // li.textContent = `${cnae.observacoes}`
  });

  // const dadosObs = dados.observacoes;

  // dadosObs.forEach(function(observacao) {
  //     const obs = document.createElement('li');
  //     obs.textContent = observacao;
  //     listaObservacao.appendChild(obs);
  // });
});
