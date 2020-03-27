const connection = require('../database/connection.js');

module.exports = {

    async indexIncidentsByOng(req, resp){
        
        const ong_id = req.headers.authorization;

        const data = await connection('incidents').select('*').where('ong_id', ong_id);

        return resp.json(data)
    }
}