let cidades = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
    ];

    //filtrar cidades com mais de 200000
const filtrarCidade = () => {
    console.log(cidades.filter((pop) => pop.populacao > 200000));
};

filtrarCidade();
    //após o filtro ordene por ordem decrescente de acordo com a populaçao
const ordenarMaiorParaMenor = () => {
    console.log(cidades.sort((a, b) => {return b.populacao-a.populacao}));
};      

ordenarMaiorParaMenor();
