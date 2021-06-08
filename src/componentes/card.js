import React from 'react';
import { Link } from 'react-router-dom'

class Card extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            personagem: {},
            isLoaded: false
        }
    }

    render(){
        const {isLoaded, personagem} = this.state;
        
        let classeCss = 'Alive';
        if (personagem.status === 'Alive'){
            classeCss = 'Alive'
        } else if (personagem.status === 'unknown'){
            classeCss = 'Unknown'
        } else {
            classeCss = 'Dead'
        }


        if (!isLoaded) {
            return (
                <div className='personagem'> Aguarde o carregamento...</div>
            )
        }     
        else {
            return(
                <Link to={`/detalhes/${personagem.id}`}>
                    <div className='personagem'>
                        <div className='imagem'>
                            <img src={personagem.image} alt={personagem.name} />
                        </div>
                        <div className='caracteristicas'>
                            <div className='nome'>
                                <h2>{personagem.name}</h2>
                            </div>
                            <div className={classeCss}>
                                <p><strong>Status:</strong> {personagem.status}</p>
                            </div>
                            <div className='especie'>
                                <p><strong>Especie:</strong> {personagem.species}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            );
            
        }
        
    }
    
    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.props.personagem.id}`)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                isLoaded: true,
                personagem: resultadoJson 
            });
        })
    }
}

export default Card