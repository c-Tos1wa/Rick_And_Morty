import React from 'react';
import { Link } from 'react-router-dom'

class Card extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            personagem: {}
        }
    }
    render(){
        const personagem = this.state.personagem;
        
        let classeCss = 'Alive';
        if (personagem.status === 'Alive'){
            classeCss = 'Alive'
        } else{
            classeCss = 'Dead'
        }

        return(
            <Link to={`/detalhes/${personagem.id}`}>
                <div className='personagem'>
                    <div className='imagem'>
                        <img src={personagem.imagem} alt={personagem.nome} />
                    </div>
                    <div className='caracteristicas'>
                        <div className='nome'>
                            <h2>{personagem.nome}</h2>
                        </div>
                        <div className={classeCss}>
                            <p>{`Status: ${personagem.status}`}</p>
                        </div>
                        <div className='especie'>
                            <p>{`Especie: ${personagem.especie}`}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    componentDidMount(){
        this.setState({
            personagem: this.props.personagem 
        })
    }
}

export default Card