const {Company} = require('../models')
class CompanyController {
    static async getCompany(req,res,next){
        try {
            const data = await Company.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async getDetailCompany(req,res,next){
        try {
            const {id} = req.params
            const data = await Company.findByPk(id)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async createCompany(req,res,next){
        try {
            const {name, companyLogo, location, email, description} = req.body
            const newCompany = await Company.create({name, companyLogo, location, email,description})
            res.status(201).json(newCompany)
        } catch (error) {
            next(error)
        }
    }
    static async editCompany(req,res,next){
        try {
            const {id} = req.params
            const {name, companyLogo, location, email, description} = req.body
            const newCompany = await Company.update({name, companyLogo, location, email,description},{where: {id}})
            res.status(200).json(newCompany)
        } catch (error) {
            next(error)
        }
    }
    static async delCompany(req,res,next){
        try {
            const {id} = req.params
            await Company.destroy({where: {id}})
            res.status(200).json({message: 'Success delete company with id '+id})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = CompanyController