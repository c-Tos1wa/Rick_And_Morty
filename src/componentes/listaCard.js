import React from 'react';
import Card from './card';
import Buscar from './busca';

class Lista extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            personagens: []
        };
    }

    adicionaPersonagens(){
        return this.state.personagens.map((personagem) => {
            return <Card personagem={personagem} key={personagem.id} />
        });
    }
    
    
    buscarPersonas(evento) {
        const nomePersona = evento.target.value.toLowerCase();
              
        fetch(`https://rickandmortyapi.com/api/character/?name=${nomePersona}`)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                personagens: resultadoJson.results 
            });
        })    
    }
    
    render(){
        const isLoaded = this.state.isLoaded;
        
        if (!isLoaded) {
            return (
                <div className='lista'> Carregando... Aguarde um momento...</div>
                )
            } 
            else {
                return (
                    <div>
                    <div className='caixa'>
                        <Buscar funcaoEncontrar={(evento) => this.buscarPersonas(evento)}/>
                    </div>
                    <div className ='lista-card'>
                        {this.adicionaPersonagens()}
                    </div>
                    <button onClick={()=>this.listarPersonagens()}>
                        Personagens
                    </button>
                </div>
            );
        }
    }
    
    
    
    componentDidMount () {
        fetch ('https://rickandmortyapi.com/api/character/')
        .then (resultado => resultado.json())
        .then (resultadoJson => {
            this.setState ({
                isLoaded: true,
                personagens: resultadoJson.results,
                personasFiltradas: resultadoJson.results
            })
        })
    }
}

export default Lista;