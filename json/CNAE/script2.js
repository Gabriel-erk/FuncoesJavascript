document.addEventListener("DOMContentLoaded", async function () {
    const container = document.createElement("div");
    container.classList.add("container");

    const tituloCnae = document.createElement("h1");
    tituloCnae.textContent = "CNAE - Código Nacional de Atividade Econômica";

    document.body.appendChild(container);
    container.appendChild(tituloCnae);

    const cnae = document.createElement("div");
    cnae.id = "cnae";

    container.appendChild(cnae);

    const blocoCnae = document.createElement("div");
    blocoCnae.id = "bloco-cnae";

    cnae.appendChild(blocoCnae);

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes');

    const dados = await resposta.json();

    dados.forEach(function (cnae) {

        const divTituloCnae = document.createElement("div");
        divTituloCnae.id = "titulo-cnae";

        blocoCnae.appendChild(divTituloCnae);

        const tituloCnae = document.createElement("h3");
        tituloCnae.textContent = `${cnae.id} - ${cnae.descricao}`;

        divTituloCnae.appendChild(tituloCnae);

        // este bloco estava no forEach abaixo, fazendo com que as "observacoes" sejam criadas multiplas vezes e sendo jogadas dentro dele - observacoes é apenas o seu conteudo, ela nao este bloco nao precisa ser cirado la dentro daquele forEach
        const divObsCnae = document.createElement("div");
        divObsCnae.id = "divObsCnae";

        blocoCnae.appendChild(divObsCnae);

        const observacoesCnae = cnae.observacoes;

        observacoesCnae.forEach(function (obs) {
            // const divObsCnae = document.createElement("div");
            // divObsCnae.id = "divObsCnae";

            const ulCnae = document.createElement("ul");

            const observacao = obs;

            for (const obsRetorno in observacao) {
                const liCnae = document.createElement("li");
                liCnae.textContent = `${observacao[obsRetorno]}`;

                ulCnae.appendChild(liCnae);

            };
            divObsCnae.appendChild(ulCnae);
            // const liCnae = document.createElement("li");
            // blocoCnae.appendChild(ulCnae);
            // ulCnae.appendChild(liCnae);
        });

        


    });


});