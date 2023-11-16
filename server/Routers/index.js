const express = require('express')
const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
const CompanyController = require('../controllers/compController')
const JobController = require('../controllers/jobController')
const ClientController = require('../controllers/clientController')
const authorization = require('../middlewares/authorization')
const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/client/jobs', ClientController.getJob)
router.get('/client/jobs/:id', ClientController.getDetailJob)

router.use(authentication)

router.get('/companies',CompanyController.getCompany)
router.post('/companies',CompanyController.createCompany)
router.get('/companies/:id',CompanyController.getDetailCompany)
router.put('/companies/:id',CompanyController.editCompany)
router.delete('/companies/:id',CompanyController.delCompany)

router.get('/jobs', JobController.getJob)
router.post('/jobs', JobController.createJob)
router.get('/jobs/:id', JobController.getDetailJob)
router.put('/jobs/:id', JobController.editJob)
router.delete('/jobs/:id', authorization,JobController.delJob)

module.exports = router