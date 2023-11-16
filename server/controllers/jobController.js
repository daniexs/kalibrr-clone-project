const {Job, Skill, sequelize} = require('../models')
class JobController {
    static async getJob(req,res,next){
        try {
            const data = await Job.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async getDetailJob(req,res,next){
        try {
            const {id} = req.params
            const data = await Job.findByPk(id, {include: Skill})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async createJob(req,res,next){
        const t = await sequelize.transaction()
        try {
            const authorId = req.user.id
            const {title, description, companyId, jobType, skills} = req.body
            const newJob = await Job.create({title,description, companyId,authorId,jobType},{
                transaction: t
            })
            const dataSkills = skills.map(el=>{
                //el = JSON.parse(el)
                el.jobId = newJob.id
                return el
            })
            console.log(dataSkills)
            const newSkill = await Skill.bulkCreate(dataSkills,{transaction:t})
            
            await t.commit()
            res.status(201).json(newJob)
        } catch (error) {
            await t.rollback()
            next(error)
        }
    }
    static async editJob(req,res,next){
        const t = await sequelize.transaction()
        try {
            const {id} = req.params
            const authorId = req.user.id
            const {title, description, companyId, jobType} = req.body
            const newJob = await Job.update({title,description, companyId,authorId,jobType},{
                transaction: t, where: {id}
            })
            await t.commit()
            res.status(200).json(newJob)
        } catch (error) {
            await t.rollback()
            next(error)
        }
    }
    static async delJob(req,res,next){
        try {
            const  {id} = req.params
            await Job.destroy({where: {id}})
            res.status(200).json({message: 'Success delete job with id '+id})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = JobController