const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/user', userController.index)

router.post('/user', userController.store)

router.put('/user/:id', userController.update)

router.delete('/user/:id', userController.destroy)

module.exports = router