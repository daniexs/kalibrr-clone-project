const bcrypt = require('bcryptjs')

const hashPassword = (password) => bcrypt.hashSync(password, 10)
const verifyPassword = (password, db_password) => bcrypt.compareSync(password, db_password)

module.exports = {hashPassword, verifyPassword}