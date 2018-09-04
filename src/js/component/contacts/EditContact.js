import React from 'react';
import { Consumer } from './../context';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import axios from 'axios';



class EditContact extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
            
        };
    }
    
    
    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
        
    }
    
    async onSubmit(dispatch, e){
        e.preventDefault(); 
        const {name, email, phone} = this.state;
        
        // VALIDATION
        if (name === ''){
            this.setState({errors: {name: 'Name is required'}});
            return;
        }
        if (email === ''){
            this.setState({errors: {email: 'Email is required'}});
            return;
        }
        if (phone === ''){
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }
        
        const updContact = {
            name,
            email,
            phone
        };
        
        const {id} = this.props.match.params;
        
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
       
        dispatch({type: 'UPDATE_CONTACT', payload: res.data});       
       
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });
        
       this.props.history.push('/');
        
     }
    onChange(e){this.setState({[e.target.name]: e.target.value});}

    
    
    render(){
        const {name, email, phone, errors} = this.state;
        
        return(
            <Consumer>
                {value => {
                  const {dispatch} = value; 
                  return (
                      <div className = "card mb-3">
                          <div className ="card-header"> Edit Contact </div>
                          <div className = "card-body"> 
                              <form onSubmit = {this.onSubmit.bind(this, dispatch)}>
                                  <TextInputGroup
                                  label = "Name"
                                  name = "name"
                                  placeholder = "Enter Name"
                                  value = {name}
                                  onChange={(e) => this.onChange(e)}
                                  error = {errors.name}
                                  />     
                                  
                                  <TextInputGroup
                                  label = "Email"
                                  name = "email"
                                  type = "email"
                                  placeholder = "Enter Email"
                                  value = {email}
                                  onChange={(e) => this.onChange(e)}
                                  error = {errors.email}
                                  />    
                                  
                                  <TextInputGroup
                                  label = "Phone"
                                  name = "phone"
                                  placeholder = "Enter Phone"
                                  value = {phone}
                                  onChange={(e) => this.onChange(e)}
                                  error = {errors.phone}
                                  />    
                                  <input type = "submit" value = "Update Contact" className = "btn btn-light btn-block"/>
                              </form>
                          </div>
                      </div>                  
                              
                    );
                }} 
            </Consumer>
            );
        
        
        
    }
}

    
EditContact.propTypes = {
    history: PropTypes,
    match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string
    })
})
};

export default EditContact;