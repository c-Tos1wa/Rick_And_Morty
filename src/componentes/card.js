import { Link } from 'react-router-dom'

function Card(props){
    let classeCss = 'Alive';
    if (props.status === 'Alive'){
        classeCss = 'Alive'
    }else{
        classeCss = 'Dead'
    }
    return(
        <Link to='/info/65'>
            <div className='personagem'>
                <div className='imagem'>
                    <img src='https://rickandmortyapi.com/api/character/avatar/65.jpeg' alt='Chris' />
                </div>
                <div className='caracteristicas'>
                    <div className='nome'>
                        <h2>Chris</h2>
                    </div>
                    <div className={classeCss}>
                        <p>Status: Alive</p>
                    </div>
                    <div className='especie'>
                        <p>Especie: Humanoid</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card