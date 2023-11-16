const {Job} = require('../models')
async function authorization(req,res,next){
    try{
        const {id} = req.params
        const findProduct = await Job.findByPk(id)
        if(!findProduct){
            throw {name: "not_found"}
        }
        if(req.user.id !== findProduct.authorId){
            throw {name: "forbidden"}
        }
        next()
    }catch(err){
        next(err)
    }
}

module.exports = authorization