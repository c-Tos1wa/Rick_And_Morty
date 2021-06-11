import React from 'react';
import Card from './card';
import Buscar from './busca';

class Lista extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            personagens: [],
            pagina: 1
        };
    }

    adicionaPersonagens(){
        return this.state.personagens.map((personagem) => {
            return <Card personagem={personagem} key={personagem.id} />
        });
    }
    
    listarPersonagens () {
        const pagina = this.state.pagina; 
        let proxima = pagina + 1;
        const novos = this.state.personagens; 

        fetch(`https://rickandmortyapi.com/api/character/?page=${proxima}`)
        .then(proxima => proxima.json())
        .then(proximaJson => {
            this.setState({
                pagina: proxima,
                personagens: novos.concat(proximaJson.results)
            })
        })
    }
    
    buscarPersonas(evento) {
        const nomePersona = evento.target.value;

        if (evento.key === 'Enter') {
            fetch(`https://rickandmortyapi.com/api/character/?name=${nomePersona}`)
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    personagens: resultadoJson.results 
                });
            })    
        } 
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
                    <button className='lista-card__button' onClick={()=>this.listarPersonagens()}>
                        Carregar Mais...
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