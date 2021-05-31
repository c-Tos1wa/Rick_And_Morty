import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Lista from './componentes/listaCard'
import Status from './componentes/paginaInfo'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Lista} />
          <Route path='/info/65' component={Status} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
