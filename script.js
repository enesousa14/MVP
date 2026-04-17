const projetos = [
    {
        nome: "Projeto 1",
        descricao: "Meu primeiro projeto em HTML e CSS",
        link: "#"
    },
    {
        nome: "Projeto 2",
        descricao: "Aplicação com JavaScript",
        link: "#"
    }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
    `;

    container.appendChild(card);
});
