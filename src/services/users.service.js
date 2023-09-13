const { randomUUID } = require('node:crypto');

const users = [];

module.exports = function createUser({ name, surName, age }) {
  const user = {
    id: randomUUID(),
    name,
    surName,
    age,
  };

  users.push(user);

  return user;
};
