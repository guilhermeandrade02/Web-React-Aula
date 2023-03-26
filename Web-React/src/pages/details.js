import React from 'react';
import { useParams } from "react-router-dom"
const filmes = [
    {
        "nome": "Batman",
        "duração": "2H",
        "ano": 2010,
        "foto": "download.jpeg",
        "genero": "Açâo/Nerd",
        "descricao": "Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada. Quando o trabalho acaba o levando a descobrir uma onda de corrupção que envolve o nome de sua família, pondo em risco a própria integridade e as memórias que tinha sobre seu pai, Thomas Wayne, as evidências começam a chegar mais perto de casa, precisando, Batman, forjar novos relacionamentos, para assim desmascarar o culpado e fazer justiça ao abuso de poder e à corrupção que há muito tempo assola Gotham City.",
        "nota": 5
    },
    {
        "nome": "Homem-Aranha",
        "duração": "2H",
        "ano": 2010,
        "foto": "th.jpg",
        "genero": "Açâo/Nerd",
        "descricao": "Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como o herói mais querido do mundo após ter sido revelada pela reportagem do Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal) no filme anterior. Incapaz de separar sua vida normal das aventuras de ser um super-herói, além de ter sua reputação arruinada por acharem que foi ele quem matou Mysterio e pondo em risco seus entes mais queridos, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdadeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa quando vilões de outras versões de Homem-Aranha de outro universos acabam indo para seu mundo. Agora, Peter não só deter vilões de suas outras versões e fazer com que eles voltem para seu universo original, mas também aprender que, com grandes poderes vem grandes responsabilidades.",
        "nota": 5
    },
    {
        "nome": "Vingadores",
        "duração": "2H",
        "ano": 2010,
        "foto": "th2.jpeg",
        "genero": "Açâo/Nerd",
        "descricao": "Tentanto proteger o planeta de ameaças como as vistas no primeiro Os Vingadores, Tony Stark busca construir um sistema de inteligência artifical que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron (voz de James Spader). Capitão América (Chris Evans), Homem de Ferro (Robert Downey Jr.), Thor (Chris Hemsworth), Hulk (Mark Ruffalo), Viúva Negra (Scarlett Johansson) e Gavião Arqueiro (Jeremy Renner) terão que se unir para mais uma vez salvar o dia.",
        "nota": 5
    },
]
function Details() {
    const { filme } = useParams();
    return (
        < div class="container" >
            <div className='text-center'>
                <h1> filme escolhido: {filme}</h1>
            </div>
            <div>
                {(() => {
                    if (filme == 'Batman') {
                        return (
                            <div>
                                <p> Sinopse: {filmes[0].descricao}</p>
                                <p> Gênero: {filmes[0].genero}</p>
                                <p> Nota: {filmes[0].nota}</p>
                                <p> Ano: {filmes[0].ano}</p>
                                <p> Duração: {filmes[0].duração}</p>
                            </div>
                        )
                    }
                    else if (filme == 'Homem-Aranha') {
                        return (
                            <div>
                                <p> Sinopse: {filmes[1].descricao}</p>
                                <p> Gênero: {filmes[1].genero}</p>
                                <p> Nota: {filmes[1].nota}</p>
                                <p> Ano: {filmes[1].ano}</p>
                                <p> Duração: {filmes[1].duração}</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <p> Sinopse: {filmes[2].descricao}</p>
                                <p> Gênero: {filmes[2].genero}</p>
                                <p> Nota: {filmes[2].nota}</p>
                                <p> Ano: {filmes[2].ano}</p>
                                <p> Duração: {filmes[2].duração}</p>
                            </div>
                        )
                    }
                }
                )()}
            </div>
            <a href="http://localhost:3000/"><button type="button" class="btn btn-dark">Voltar</button></a>
        </div>
    )
}
export default Details;


