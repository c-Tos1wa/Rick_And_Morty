import { Link } from 'react-router-dom'

function Status(){
    return(
        <div className='status'>
            <div className='imagem'>
                <img src='https://rickandmortyapi.com/api/character/avatar/65.jpeg' alt='Chris' />
            </div>
            <div className='situacao'>
                <div className='nome'>
                    <strong>Chris</strong>
                    <p>Especie: Humanoid</p>
                    <p>Status: Alive</p>
                </div>
                <div className='botao'>
                    <Link to = '/'> Voltar! </Link>
                </div>
            </div>    
        </div>
    )
}

export default Status;