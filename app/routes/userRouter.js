const express = require('express')
const asyncHandler = require('../utils/asyncHandler')
const dbController = require('../controllers/dbController')
const User = require('../models/user')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.getSchema, [User])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

router.get('/:user', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.getSchemaByProperty, [User, 'user', req.params.user])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

router.post('/', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.createSchema, [User, req.body])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

router.put('/:id', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.updateSchema, [User, req.params.id, req.body])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

module.exports = router
