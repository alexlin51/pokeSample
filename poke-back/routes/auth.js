const router = require('express').Router();
const bcrypt = require("bcrypt");
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/check', async(req, res)=> {
    const {token} = req.body;
    if (!token) {
        res.status(200).send({
            logged: false
        });
        return;
    }
    try{
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const findOne = await User.findOne({ user: data.user });
        if (!findOne){
            res.status(200).send({
                logged: false
            });
            return;
        }
        res.status(200).send({
            logged: true
        });
    } catch(e) {
        res.status(200).send({
            logged: false
        });
        return;
    }
    
});

router.post('/register', async (req, res) => {
    const {user, pass} = req.body;
    try {
        const findOne = await User.findOne({ user });
        if (findOne){
            res.status(500).send();
        }
        const hashedPassword = await bcrypt.hash(pass, 10);

        var newUser = new User({
            user,
            pass: hashedPassword
        })
        
        try{
            const savedUser = await newUser.save();
            res.status(200).send();
        } catch(err){
            res.status(500).send();
        }
        res.status(200).send();
    } catch(e) {
        res.status(500).send();
    }
});

router.post('/login', async (req, res) => {
    const {user, pass} = req.body;
    try {
        const findOne = await User.findOne({ user });
        if (!findOne){
            res.status(500).send();
        }
        let username = findOne.user;
        let password = findOne.pass;

        if (await bcrypt.compare(pass, password)){
            const token = jwt.sign({ user: username }, process.env.JWT_SECRET);
            res.status(200).send({
                token
            })
        } else {
            res.status(500).send();
        }

    } catch(e) {
        res.status(500).send();
    }
})

module.exports = router;