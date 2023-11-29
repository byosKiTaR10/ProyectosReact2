const db = require('./db')
const helper = require('../helper')
const config = require('../config')

async function getUserData (user, password) {
    return {
        'user':user,
        'password': password
    }
}

module.exports = {
    getUserData
}
