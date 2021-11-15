import React from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setClient } from '../store/Clients';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'

const Read = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);

  const getData = () => {
    axios.get('https://6191338a41928b001768ffa1.mockapi.io/mockData')
      .then((response) => setData(response.data));
  }

  const handleDelete = (id) => {
    axios.delete(`https://6191338a41928b001768ffa1.mockapi.io/mockData/${id}`)
      .then(() => getData());
  }

  React.useEffect(() => {
    axios.get('https://6191338a41928b001768ffa1.mockapi.io/mockData')
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="table">
      <Table singleLine className="animaright">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((user, index) => (
            <Table.Row key={ index }>
              <Table.Cell>{ user.firstName }</Table.Cell>
              <Table.Cell>{ user.lastName }</Table.Cell>
              <Table.Cell>{ (user.checkbox) ? 'Checked' : 'Unchecked' }</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <button
                      onClick={ () => dispatch(setClient(user)) }
                    >
                      Update
                    </button>
                  </Link>
                </Table.Cell>
              <Table.Cell>
                <button
                  onClick={ () => handleDelete(user.id) }
                >
                  Deletar
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
};

export default Read;
