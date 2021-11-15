import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const [id, setId] = React.useState(null);

  let navigate = useNavigate();
  const { dataClients } = useSelector(state => state);

  const updateData = () => {
    axios.put(`https://6191338a41928b001768ffa1.mockapi.io/mockData/${id}`,{
      username,
      email,
      checkbox
    }).then(
      () => navigate("/read")
    );
  }

  React.useEffect(() => {
    setId(dataClients.id);
    setUsername(dataClients.username);
    setEmail(dataClients.email);
    setCheckbox(dataClients.checkbox);
  }, [dataClients]);

  return (
    <Form className="create-form animaright">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder='First Name'
          onChange={ ({ target }) => setUsername(target.value) }
          value={ username }
        />
      </Form.Field>

      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder='Last Name'
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
        />
      </Form.Field>

      <Form.Field>
        <Checkbox
          label='I agree to the Terms and Conditions'
          onChange={ () => setCheckbox(!checkbox) }
          checked={ checkbox }
        />
      </Form.Field>

      <Button
        type='submit'
        onClick={ updateData }
      >
        Update
      </Button>
    </Form>
  )
}

export default Update;
