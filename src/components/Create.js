import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);

  let navigate = useNavigate();

  const postData = () => {
    axios.post('https://6191338a41928b001768ffa1.mockapi.io/mockData',{
      firstName,
      lastName,
      checkbox
    }).then(
      () => navigate("/read")
    );
  }

  return (
    <div className="animaright">
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            onChange={ ({ target }) => setFirstName(target.value) }
          />
        </Form.Field>

        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            onChange={ ({ target }) => setLastName(target.value) }
          />
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
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Create;
