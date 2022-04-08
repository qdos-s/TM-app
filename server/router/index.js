const Router = require('express').Router
const userController = require('../controllers/user-controller')
const {body} = require('express-validator')

const router = new Router()

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 20}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/tasks', userController.createTasks)
router.post('/remove-task', userController.removeTask)
router.post('/times', userController.fillTime)
router.get('/tasks', userController.getTasks)
router.get('/times', userController.getTime)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)

module.exports = router
