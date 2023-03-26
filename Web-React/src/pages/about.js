import React from 'react';
import { useParams } from 'react-router-dom';

function About() {
    const { name } = useParams()
    return (
        < div class="container" >       
            <h3>
                A StreamingGui é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários 
                premiados em milhares de aparelhos conectados à internet.
                Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal 
                acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
            </h3>
        </div >
    )
}
export default About;