const express = require('express')
const userService = require('../BL/user.service')
const router = express.Router()


router.get('/', (req, res) => {
   try {
      const result = userService.getAllUsers()
      res.send(result)
   } catch (error) {
      res.status(500).send(error || 'something went wrong')
   }
})

router.post('/', (req, res) => {
   try {
      const result = userService.createUser(req.body)
      res.send(result)
   } catch (error) {
      res.status(500).send(error || 'something went wrong')
   }
})

// TODO
// get one user by :id in the params
// call the userService.readOneUser and send the id
// return one user

// TODO
// get delete user by :id in the params
// call the userService.deleteOneUser and send the id
// return ok

// TODO
// get update user by :id in the params
// and get the update fields from the req.body
// call the userService.updateUser and send the id and body
// return the updated user

module.exports = router