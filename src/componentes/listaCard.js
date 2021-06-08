import React from 'react';
import Card from './card';

class Lista extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            personagens: []
        };
    }

    //listarPersonagens(){}


    adicionaPersonagens(){
        return this.state.personagens.map((personagem) => {
            return <Card personagem={personagem} key={personagem.id} />
        });
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
                    <div className ='lista'>
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
        fetch ('https://rickandmortyapi.com/api/character')
        .then (resultado => resultado.json())
        .then (resultadoJson => {
            this.setState ({
                isLoaded: true,
                personagens: resultadoJson.results
            })
        })
    }
}

export default Lista;