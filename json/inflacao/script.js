document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("conteudo");

  const resposta = await fetch(
    "https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR"
  );

  // colchetes [] multiplos resultados, e chaves {} um unico elemento

  // transformandao o conteudo de resposta em um arquivo json, objeto json, para ser maniupulado em js
  const dados = await resposta.json();

  // estou dizendo que, para cada bloco de codigo, darei o nome de inflacao(o bloco inteiro sera passado como parametro, como o nome de "inflacao") (como retorna multiplos valores, é necessario o foreach)
  dados.forEach(function (inflacao) {
    // mesma coisa que, se eu fosse no html, e criasse uma div comum
    const divBlocoInflacao = document.createElement("div"); // criando a div
    // colocando uma claasse na div que criei, e definindo seu nome
    divBlocoInflacao.classList.add("bloco-inflacao"); // atribuindo o nome de uma classe

    const ulSubtitulo = document.createElement("ul");
    // atribuindo um id ao elemento 'ul' que criei
    // outro exemplo: subtitulo.setAttribute("id", "subtitulo")
    ulSubtitulo.id = "subtitulo";

    const liSubtitulo = document.createElement("li");
    liSubtitulo.textContent = `${inflacao.medida} - (${inflacao.unidade})`;

    ulSubtitulo.appendChild(liSubtitulo);

    divBlocoInflacao.appendChild(ulSubtitulo);

    // array geralmente colocado no plural
    const resultados = inflacao.resultados;

    // resultado, pois, apesar dos inumeros valores que serao percorridos, trabalharei apenas com o retonro de um - percorrendo resultados, que esta dentro de inflação, que esta sendo percorrida pois é um array e possui varios elementos
    resultados.forEach(function(resultado){
        const olResultados = document.createElement("ol");
        const series = resultado.series;

        series.forEach(function(serieGeral){
            // pegando o valor serie, dentro de "series", que esta dentro do array resultados
            const serieData = serieGeral.serie;

            // in permite percorrer todas as chaves de um objeto, entao sera percorrido todas as chaves de "serieData", os valores que preciso
            for(const anoMes in serieData){
                const liSerie = document.createElement("li");
                // primeiro pega a chave - depois, chama-se serie data (que entra em serie), na posição da chave para encontrar o seu valor
                liSerie.textContent = `${anoMes} - ${serieData[anoMes]}`;
                olResultados.appendChild(liSerie);
            };
        });
        // ol, como colocado no html, esta dentro de ul, entao, aqui ele esta sendo adicionado como filho de ul
        ulSubtitulo.appendChild(olResultados);
    });

    conteudo.appendChild(divBlocoInflacao);
  });
});
