import Auth from '../../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  
  const [login, { error, data }] = useMutation(LOGIN_USER);
  
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      
      Auth.login(data.login.token);
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
      <form>
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
      </form>
    </>
  );
};

export default LoginForm;
