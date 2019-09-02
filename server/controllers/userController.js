const users = require('../userData.json')

module.exports = {
    getUsers: (req, res) => res.status(200).send(users)
}