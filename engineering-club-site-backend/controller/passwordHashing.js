const bcrypt = require('bcrypt');
const saltRounds = 10; // Adjust cost factor for performance vs security

//hasing the password
const hashPasswordBcrypt = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}
// verify password
const verifyPasswordBcrypt = (suppliedPassword, storedHash) => {
  return bcrypt.compareSync(suppliedPassword, storedHash);
}

// Usage:
// const userPasswordBcrypt = 'mySecurePassword123';
// const hashedPasswordBcrypt = hashPasswordBcrypt(userPasswordBcrypt);
// console.log('Bcrypt Hash:', hashedPasswordBcrypt);

// const isMatchBcrypt = verifyPasswordBcrypt(userPasswordBcrypt, hashedPasswordBcrypt);
// console.log('Bcrypt Password verified:', isMatchBcrypt);
exports.hashPasswordBcrypt = hashPasswordBcrypt;
exports.verifyPasswordBcrypt = verifyPasswordBcrypt;