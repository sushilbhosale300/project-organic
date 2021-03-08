const jwt = require('jsonwebtoken');

const generateToken = userId => {
  return jwt.sign({ id: userId }, 'myjwtsecreatekeyisposterandiwanttoallowewssdoteveryoneuom', {
    expiresIn: '30d',
  });
};

module.exports = generateToken;
