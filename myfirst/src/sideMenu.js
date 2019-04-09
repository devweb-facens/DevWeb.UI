import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import cadastroAdministrador from './Componentes/cadastroAdministrador';
import cadastroCordenador from './Componentes/cadastroCordenador'

class sideMenu extends Component {
   
     
  render() {
    return (
        <Router>
        <div>
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
      {/* <li><Link to={'/'} className="nav-link"> Home </Link></li> */}
           <li><Link to={'/cadastroAdministrador'} className="nav-link">Cadastro Administrador</Link></li>
            <li><Link to={'/cadastroCordenador'} className="nav-link">Cadastro Cordenador</Link></li>
            
      </ul>
      <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      <Route path='/cadastroAdministrador' component={cadastroAdministrador} />
       <Route path='/cadastroCordenador' component={cadastroCordenador} />
      </Switch>
            </nav>
        </div>
        </Router>
    );
      }
}

export default sideMenu;




















