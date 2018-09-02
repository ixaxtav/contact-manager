import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            showContactInfo: false
        };
    }
    

    render(){
        const {name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return(
            <div className="card card-body mb-3">
                <h4> 
                    {name} <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fas fa-sort-down" style={{cursor: 'pointer'}}/>
                    <i className ="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}/>
                </h4>
                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null}
                 
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        );
    }
}

Contact.propTypes = { 
    contact: PropTypes.object
};

export default Contact; 