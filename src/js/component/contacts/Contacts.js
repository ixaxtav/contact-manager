import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import { Consumer } from './../context.js';

class Contacts extends React.Component{
    render(){
        return(
            <Consumer>
                {value => {
                const { contacts} = value;
                  return (
                      <React.Fragment> 
                          <h1 className = "display-4 mb-4 text-dark">
                              Contact List 
                          </h1>
                          {contacts.map(contact=> (
                              <Contact 
                        key={contact.id}
                        contact={contact} 
                    />
            ))}
                      </React.Fragment>
                  ); 
                }}
            </Consumer>
            );
    }
}

export default Contacts; 