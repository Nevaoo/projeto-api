const express = require('express')
const jwt = require ('jsonwebtoken')

const User = require('../module/user')

const router = express.Router()


router.post('/register', async(req, res) => {
    const {name, email, password} = req.body
    try {
        const user = await User.create({name, email, password})

        await user.save()

        user.password = undefined

        const token = jwt.sign({ id: user.id }, 'a', {expiresIn: '2000s'})

        return res.send({ user, token})
    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: 'Registration failed' })
    }
}) 

router.post('/authenticate', async(req, res) => {
    const {email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user){
        return res.status(400).send({ error: 'User not found' })
    }
        
        if (password === user.password){
            const token = jwt.sign({ id: user.id}, 'a', {expiresIn: '2000s'})
            user.password = undefined
            return res.status(200).send({ user, token })
        }
        
        return res.status(400).send({ error: 'Password Invalid' })

        })
        
module.exports = router