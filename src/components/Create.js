import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const [btnEnabled, setBtnEnabled] = React.useState(true);
  const [errorName, setErrorName] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);

  let navigate = useNavigate();

  const postData = () => {
    axios.post('https://6191338a41928b001768ffa1.mockapi.io/mockData',{
      username,
      email,
      checkbox
    }).then(
      () => navigate("/read")
    );
  }

  const handleErrors = () => {
    if (!errorName && !errorEmail) {
      setBtnEnabled(false);
    } else {
      setBtnEnabled(true);
    }
  }

  const handleBlurUsername = ({ target }) => {
    if (!target.value) {
      setErrorName(true);
    } else {
      setErrorName(false);
    };
  }

  const handleChangeUsername = ({ target }) => {
    setErrorName(false);
    setUsername(target.value);
  }

  const validateEmail = (value) => {
    const emailRegex = /^[\w.]*[0-9]*@[\w]*\.[\w]{2,3}$/;
    if (emailRegex.test(value) || value === null) {
      setErrorEmail(false);
      setEmail(value);
    } else {
      setErrorEmail(true);
      setBtnEnabled(true)
    }
  }

  const handleChangeEmail = ({ target }) => {
    validateEmail(target.value);
    handleErrors();
  }

  return (
    <div className="animaright">
      <Form className="create-form">
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            placeholder='Username'
            onBlur={ handleBlurUsername }
            onChange={ handleChangeUsername }
          />
          { errorName && <p className="error">Preencha o campo username.</p> }
        </Form.Field>

        <Form.Field>
          <label>E-mail</label>
          <input
            type="email"
            placeholder='email@email.com'
            onBlur={ ({ target }) => validateEmail(target.value) }
            onChange={ handleChangeEmail }
          />
          { errorEmail && <p className="error">Preencha corretamente o campo e-mail</p> }
        </Form.Field>

        <Form.Field>
          <Checkbox
            label='I agree to the Terms and Conditions'
            onChange={ (event) => setCheckbox(!checkbox) }
          />
        </Form.Field>

        <Button
          type='submit'
          onClick={ postData }
          disabled={ btnEnabled }
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Create;
