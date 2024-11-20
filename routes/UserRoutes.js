const express = require ('express')
const userService = require('../service/UserService')
const router = express.Router()

router.post('/', async(req,res)=>{
        try {
            const user =await  userService.createUser(req.body)
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json({error: error.message})            
        }
})

module.exports = router
