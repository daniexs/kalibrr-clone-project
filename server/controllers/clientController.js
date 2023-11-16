const {Job, Skill, Company} = require('../models')

class ClientController {
    static async getJob(req,res,next){
        try {
            const data = await Job.findAll({include: Company})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async getDetailJob(req,res,next){
        try {
            const {id} = req.params
            const data = await Job.findByPk(id, {include: [{model: Skill},{model: Company}]})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = ClientController