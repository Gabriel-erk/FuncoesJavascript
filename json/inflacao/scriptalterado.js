document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("conteudo");

  const resposta = await fetch(
    "https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR"
  );

  const dados = await resposta.json();

  dados.forEach(function (inflacao) {
    const divBlocoInflacao = document.createElement("div"); // criando a div

    divBlocoInflacao.classList.add("bloco-inflacao"); // atribuindo o nome de uma classe

    const ulSubtitulo = document.createElement("ul");
    ulSubtitulo.id = "subtitulo";

    const liSubtitulo = document.createElement("li");
    liSubtitulo.textContent = `${inflacao.medida} - (${inflacao.unidade})`;

    ulSubtitulo.appendChild(liSubtitulo);

    divBlocoInflacao.appendChild(ulSubtitulo);

    const olResultados = document.createElement("ol");

    // meio alternativo ao forEach para deixar o codigo mais limpo
    const serieData = inflacao.resultados[0].series[0].serie;

    // in permite percorrer todas as chaves de um objeto, entao sera percorrido todas as chaves de "serieData", os valores que preciso
    for (const anoMes in serieData) {
      const liSerie = document.createElement("li");
      liSerie.textContent = `${anoMes} - ${serieData[anoMes]}`;
      olResultados.appendChild(liSerie);
    }

    ulSubtitulo.appendChild(olResultados);

    container.appendChild(divBlocoInflacao);
  });
});
