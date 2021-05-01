const router = require('express').Router();
const controllers = require('../controllers')

router.post('/entry', controllers.data.create)

module.exports = router