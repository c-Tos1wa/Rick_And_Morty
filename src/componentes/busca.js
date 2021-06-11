import React from 'react';

class Buscar extends React.Component {
    render() {
        return (
            <div className='caixa'>
                <input type='text' className='caixa__input'
                    placeholder='Procurar personagens...'
                    onKeyPress={this.props.funcaoEncontrar} />
            </div>
        );
    }
}


export default Buscar;