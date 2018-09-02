import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './component/Contacts';
import Header from './component/Header';
import 'bootstrap';
import '../styles/index.scss';
import {Home} from './component/home.jsx';
import { Provider } from './component/context.js';

class App extends React.Component{
    render(){
        
        return(
            <Provider>
                <div className = "App">
                    <Header branding="Contact Manager" />
                    <div className="container">
                        <Contacts />
                    </div>
                </div> 
            </Provider>
            );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);