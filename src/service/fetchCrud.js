const BASE_URL = 'https://crudcrud.com/api/a57b2bfc5f2f431484f660eb8fd4afcf';

const getUsers = async () => {
  try {
    const requestUsers = await fetch(BASE_URL);
    const responseUsers = await requestUsers.json();
    return responseUsers;
  } catch (err) {
    console.error('Erro...', err.message);
  }
}

export {
  getUsers,
}