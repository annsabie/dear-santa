import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';

// import Auth from '../utils/auth';

export default function SignupForm() {
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    email: '', 
    password: '' 
 });

  const defaultSignUpFormValues = { firstName:"", email:"", password:""}

  const [formData, setFormData] = useState(defaultSignUpFormValues);
  const [errorMessage, setErrorMessage] = useState('');

  // update state based on form input changes
  handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // submit form
  handleFormSubmit = (e) => {
    e.preventDefault();

    if(!formData.username) {
      setErrorMessage('Username is invalid');

      return;
    }

    if(!checkPassword(formData.password)) {
      setErrorMessage('Password is invalid')
    }
    return;
    // this.setState({
    //   [e.target.id]: e.target.value
    // })
  } 

return (
  <div className="container">
    <form onSubmit={this.handleFormSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              onChange={this.handleInputChange}
            />
        </div>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              onChange={this.handleInputChange}
              required
            />
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              onChange={this.handleInputChange}
              required
            />
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SignUp</button>
            {/* <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
            </div> */}
        </div>
        <h7 className="grey-text text-darken-3">* If you already have an account with us, please <a href="/signin">Login</a></h7>
    </form>
    {errorMessage && (
        <div>
          <p style={errorStyle} className="error-text">{errorMessage}</p>
        </div>
      )}
  </div>
)
}

export default SignupForm;