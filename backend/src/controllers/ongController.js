const crypto = require('crypto');
const connection = require('../database/connection.js');

module.exports = {

    async index(req, resp){
    
        const data = await connection.select('*').from('ongs')
    
        return resp.json(data)
    },


    async insert(req, resp){

        const { name, email, whatsapp, city, uf } = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
    
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return resp.json({id});
    }
}