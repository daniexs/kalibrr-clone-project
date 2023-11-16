const jwt = require('jsonwebtoken')

const createToken = (payload) => jwt.sign(payload, 'dani')
const verifiToken = (token) => jwt.verify(token, 'dani')

module.exports = {createToken, verifiToken}