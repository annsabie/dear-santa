import Auth from '../../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  
  // set ADD_USER mutation - do we need data?
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // set state for form validation
  const [validated] = useState(false);
  
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: {...userFormData }
      });
        // using the token created log the user in
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <label>
          First Name: 
          <input type="text" name="firstname" />
        </label>
        <label>
          Last Name: 
          <input type="text" name="lastname" />
        </label>
        <label>
          Email Address: 
          <input type="text" name="email" />
        </label>
        <label>
          Password: 
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default SignupForm;
