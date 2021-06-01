import React from 'react';
import { Link } from 'react-router-dom'

class Status extends React.Component{
    constructor(props){
        super(props);
        this.id = parseInt(props.match.params.id);

        this.state = {
            personagem: {
                'id': 0,
                'nome': '',
                'status': "",
                'especie': "",
                'última localização conhecida': "",
                'episodio': ""
            }
        }

        this.personagens = {
            255: {
                'id': 255,
                'nome': "Orthodox Jew",
                'imagem': "https://rickandmortyapi.com/api/character/avatar/255.jpeg",
                'status': "Alive",
                'especie': "Human",
                'localizacao': "Earth(Replacement Dimension)",
                'episodio': "Get Schwifty"
                },

            165:{
                'id': 165,
                    'nome': "Investigator Rick",
                    'imagem': "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
                    'status': "Dead",
                    'especie': "Human",
                    'localizacao': "Citadel of Ricks",
                    'episodio': "The Ricklantis Mixup"
                },
            
            210: {
                'id': 210,
                'nome': "Lucy",
                'imagem': "https://rickandmortyapi.com/api/character/avatar/210.jpeg",
                'status': "Dead",
                'especie': "Human",
                'localizacao': "Earth(Replacement Dimension)",
                'episodio': "Ricksy Business"
                },
                
            224: {
                'id': 224,
                'nome': "Michael McLick",
                'imagem': "https://rickandmortyapi.com/api/character/avatar/224.jpeg",
                'status': "Alive",
                'especie': "Human",
                'localizacao': "Interdimensional Cable",
                'espisodio': "Interdimensional Cable 2: Tempting Fate"
                }
            }
    }


    render(){
        const personagem = this.state.personagem;
        return(
            <div className='status'>
                <div className='imagem'>
                    <img src={personagem.imagem} alt={personagem.nome} />
                </div>
                <div className='situacao'>
                    <div className='nome'>
                        <strong>{personagem.nome}</strong>
                        <p><strong>Status:</strong> {personagem.status}</p>
                        <p><strong>Espécie:</strong> {personagem.especie}</p>
                        <p><strong>Última Localização Conhecida:</strong> {personagem.localizacao}</p>
                        <p><strong>Episódio:</strong> {personagem.episodio}</p>
                    </div>
                    <div className='botao'>
                        <Link to = '/'> Voltar! </Link>
                    </div>
                </div>    
            </div>
        );
    }

    componentDidMount(){
        let personagem = this.personagens[this.id];
        if (personagem){
            this.setState({
                personagem: personagem
            })
        }
    }
}

export default Status;