// import Auth from '../../utils/auth';

// const SignupForm = () => {
//   // set initial form state
//   const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  
//   // set ADD_USER mutation - do we need data?
//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   // set state for form validation
//   const [validated] = useState(false);
  
//   // set state for alert
//   const [showAlert, setShowAlert] = useState(false);

//   // update state based on form input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await addUser({
//         variables: {...userFormData }
//       });
//         // using the token created log the user in
//       Auth.login(data.addUser.token);
//     } catch (err) {
//       console.error(err);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         <label>
//           First Name: 
//           <input type="text" name="firstname" />
//         </label>
//         <label>
//           Last Name: 
//           <input type="text" name="lastname" />
//         </label>
//         <label>
//           Email Address: 
//           <input type="text" name="email" />
//         </label>
//         <label>
//           Password: 
//           <input type="text" name="password" />
//         </label>
//         <input type="submit" value="Submit" />
//       </Form>
//     </>
//   );
// };

// export default SignupForm;

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