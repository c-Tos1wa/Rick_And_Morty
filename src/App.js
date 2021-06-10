import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Lista from './componentes/listaCard'
import Status from './componentes/paginaInfo'

class App extends React.Component {
    render(){
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={Lista} />
            <Route path='/detalhes/:id' component={Status} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
