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
                <div className='info__status'>
                    <div className='info__status__img'>
                        <img className='info__status__img' src={personagem.image} alt={personagem.name} />
                    </div>
                    <div className='info__situacao'>
            
                        <h3 className='info__situacao__nome'>
                            <strong>{personagem.name}</strong>
                        </h3>

                        <div className='info__situacao__ficha'>
                            <p><strong>Gender: </strong>{personagem.gender}</p>
                            <p><strong>Status:</strong> {personagem.status}</p>
                            <p><strong>Species:</strong> {personagem.species}</p>
                            <p><strong>Origin:</strong> {personagem.origin.name}</p>
                            <p><strong>Last Known Location: </strong> {personagem.location.name}</p>
                        </div>
                        <div className='botao'>
                            <Link className='info__botao' to = '/'> Voltar! </Link>
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