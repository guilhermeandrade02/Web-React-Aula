import React from 'react';
import "../pages/Css/plans.css";
import { useParams } from 'react-router-dom';
import Pagamento from '../icon/pagamentos';

const valores = [{
    "nome": "Basico",
    "valor": "0U$",
    "disponivel": "1",
    "Propagandas": "Propagandas a cada 10 minutos",
},
{
    "nome": "Medio",
    "valor": "5U$",
    "disponivel": "10",
    "Propagandas": "1 Propaganda por filme",
},
{
    "nome": " Pro",
    "valor": "25U$",
    "disponivel": "Ilimitado",
    "Propagandas": "Sem Propagandas",
}
]
function Contratar() {
    const { val } = useParams();
    return (
        < div cals="container" >
            <h1 className='pagamento'></h1>
            <div>
                {(() => {
                    if (val == 'Basico') {
                        return (
                            <div className='pagamento'>
                                <form >
                                    <Pagamento />
                                </form>
                            </div>
                        )
                    }
                    else if (val == 'Medio') {
                        return (
                            <div>
                                <Pagamento />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <Pagamento />
                            </div>
                        )
                    }
                }
                )()}
            </div>
        </div>
    )
}

export default Contratar;