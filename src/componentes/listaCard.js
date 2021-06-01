import React from 'react';
import Card from './card'

class Lista extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            personagens: []
        };
    }

    listarPersonagens(){
        const novaPersona = [
            {
                'id': 255,
                'nome': "Orthodox Jew",
                'imagem': "https://rickandmortyapi.com/api/character/avatar/255.jpeg",
                'status': "Alive",
                'especie': "Human"

            },

            {
                'id': 165,
                'nome': "Investigator Rick",
                'imagem': "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
                'status': "Dead",
                'especie': "Human"
            },

            {
                'id': 210,
                'nome': "Lucy",
                'imagem': "https://rickandmortyapi.com/api/character/avatar/210.jpeg",
                'status': "Dead",
                'especie': "Human"
            },

            {
                'id': 224,
                'nome': "Michael McLick",
                'imagem': "https://rickandmortyapi.com/api/character/avatar/224.jpeg",
                'status': "Alive",
                'especie': "Human"
            }
        ];

        this.setState({
            personagens: novaPersona
        });
    }


    adicionaPersonagens(){
        return this.state.personagens.map((personagem) => {
            return <Card personagem={personagem} key={personagem.id} />
        });
    }

    render(){
        return (
            <div>
                <div className ='lista'>
                    {this.adicionaPersonagens()}
                </div>
                <button onClick={()=>this.listarPersonagens()}>
                    Personagens
                </button>
            </div>
        )
    }
}

export default Lista;