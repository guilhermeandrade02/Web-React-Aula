import './filme.css';

const filme = [
    {
        "nome":"Batman",
        "duração" :"2H",     
        "foto": "download.jpeg",        
    },
    {
        "nome":"Homem-Aranha",
        "duração" :"2H",       
        "foto": "th.jpg",        
    },
    {
        "nome":"Vingadores",
        "duração" :"2H",      
        "foto": "th2.jpeg",        
    },
]

function Filme() {
    return (
        <div className="container text-center">
            <div class="row">
                {filme.map((filme, i) => (
                <div className="col">
                    <div className="card " >
                        <img  class="card-img-top"  src={'/assets/images/' + filme.foto} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{filme.nome} ({filme.ano})</h5>
                            <p class="card-text">{filme.descrição}</p>
                            <p class="card-text">Genero: {filme.genero}</p>
                            <p class="card-text">Duração: {filme.duração}</p>                            
                            <a href={`/details/${filme.nome}`}>
                                <div className="btn btn-primary">
                                    Detalhes
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
export default Filme;
