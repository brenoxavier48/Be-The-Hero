const connection = require('../database/connection.js');

module.exports = {

    async validateOngSession(req, resp){

        const { id } = req.body;

        const ong = await connection('ongs').select('name').where('id', id);

        if(!ong) return resp.status(400).json({ error: 'No ONG found with this ID.'});

        return resp.json(ong);
    }
}