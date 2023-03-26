import React from 'react';
import "../pages/Css/plans.css";

const valores = [{
    "nome": "Basico",
    "valor": "R$: 20.00",
    "disponivel": "2",
    "Propagandas": "Propagandas a cada 10 minutos",
},
{
    "nome": "Medio",
    "valor": "R$: 30.00",
    "disponivel": "8",
    "Propagandas": "1 Propaganda por filme",
},
{
    "nome": " Pro",
    "valor": "R$: 40.00",
    "disponivel": "Ilimitado",
    "Propagandas": "Sem Propagandas",
}
]


function Planos() {
    return (
        <div className="container text-center">
            <h1 class="display-4">Planos </h1>
            <div className="row">
                {valores.map((val, i) => (
                    <div className="col" key={i}>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{val.nome}</h2><br></br>
                                <h5> Valor mensal {val.valor}</h5><br></br>
                                {(() => {
                                    if (val.disponivel == "Ilimitado") {
                                        return (
                                            <div>
                                                <h5>Ilimitado</h5><br></br>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div>
                                                <h5>{val.disponivel} filmes disponíveis diariamente</h5><br></br>
                                            </div>
                                        )
                                    }
                                })()}
                                <h5>  {val.Propagandas} </h5><br></br>
                                <a href={`/contratar/${val.nome}`}><br></br><br></br>
                                    <div className="btn btn-dark">
                                        Detalhes  </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planos;