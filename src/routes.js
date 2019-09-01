import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//importando paginas
import Desktop from './pages/Desktop';
import Search from './pages/Search';
import E1 from './pages/E1';

//api de autenticação
import { Auth } from "./api/authenticator";

//rotas
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Desktop} />
            <Private path="/home" component={Search} />
            <Route path="/e1" component={E1} />
        </Switch>
    </BrowserRouter>
);

//definindo rota privada
const Private = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
        }
    />
);
export default Routes;