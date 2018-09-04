import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Contacts from './component/contacts/Contacts';
import AddContact from './component/contacts/AddContact';
import Header from './component/layout/Header';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import 'bootstrap';
import '../styles/index.scss';
import {Home} from './component/home.jsx';
import { Provider } from './component/context.js';



class App extends React.Component{
    render(){
        
        return(
            <Provider>
                <Router>
                    <div className = "App">
                        <Header branding="Contact Manager" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component= {Contacts} />
                                <Route exact path="/contact/add" component= {AddContact} />
                                <Route exact path="/about" component= {About} />
                                <Route component = {NotFound} />
                            </Switch>
                        </div>
                    </div> 
                </Router>
            </Provider>
            );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);