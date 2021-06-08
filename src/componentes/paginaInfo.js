import React from 'react';
import { Link } from 'react-router-dom'

class Status extends React.Component{
    constructor(props){
        super(props);
        this.id = parseInt(props.match.params.id);

        this.state = {
            isLoaded: false,
            personagem: {}
        }
    }


    /*listaEpisodes () {
        const personagem = this.state.personagem;
        return personagem.episode.map(episode => {
            const episodio = episode.episode;
            return (
                <div className='episodio' key='episodio.id'>
                    {episodio}
                </div>
            )

        })

        
    }*/

    render(){
        const {personagem, isLoaded} = this.state;

        if (!isLoaded) {
            return (
                <div className='status'> Carregando...</div>
            )
        }
        else {
            return(
                <div className='status'>
                    <div className='imagem'>
                        <img src={personagem.image} alt={personagem.name} />
                    </div>
                    <div className='situacao'>
                        <h3 className='nome'><strong>{personagem.name}</strong></h3>
                        <div className='ficha'>
                            <p><strong>Gênero: </strong>{personagem.gender}</p>
                            <p><strong>Status:</strong> {personagem.status}</p>
                            <p><strong>Espécie:</strong> {personagem.species}</p>
                            <p><strong>Origem:</strong> {personagem.origin.name}</p>
                            <p><strong>Última localização conhecida: </strong> {personagem.location.name}</p>
                        </div>
                        <div className='botao'>
                            <Link to = '/'> Voltar! </Link>
                        </div>
                    </div>    
                </div>
            );
        }
    }

    componentDidMount(){
       fetch(`https://rickandmortyapi.com/api/character/${this.id}`)
       .then(resultado => resultado.json())
       .then(resultadoJson => {
            this.setState({
               personagem: resultadoJson,
               isLoaded: true
            });
        });
    }
}

export default Status;