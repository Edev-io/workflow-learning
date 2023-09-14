const { randomUUID } = require('node:crypto');

module.exports = function createUser({ name, surName, age }) {
  const users = [];

  const user = {
    id: randomUUID(),
    name,
    surName,
    age,
  };

  users.push(user);

  return user;
};
