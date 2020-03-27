const knex = require('knex');
const configKnex = require('../../knexfile.js')

const connection = knex(configKnex.development);

module.exports = connection;