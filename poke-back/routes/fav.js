const router = require('express').Router();
const Fav = require('../models/fav');
const jwt = require('jsonwebtoken');

router.post('/all', async(req, res)=> {
    const {token} = req.body;

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = data.user;

    let favs = await Fav.find({ user: user });
    res.status(200).send({
        favs
    });
    return;

});

router.post('/isFav', async(req, res)=> {
    const {token, name} = req.body;

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = data.user;

    if (await Fav.exists({ user: user, fav: name })){
        res.status(200).send({
            fav: true
        });
        return;
    } else {
        res.status(200).send({
            fav: false
        });
        return;
    }

});

router.post('/delete', async(req, res)=> {
    const {token, name} = req.body;

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = data.user;

    const findOne = await Fav.deleteMany({ user: user, fav: name });
    res.status(200).send();
});

router.post('/add', async (req, res)=> {
    const {token, name} = req.body;

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = data.user;

    if (await Fav.exists({ user: user, fav: name })){
        res.status(500).send();
        return;
    }

    var newFav = new Fav({
        user,
        fav: name
    })
    
    try{
        const savedFav = await newFav.save();
        res.status(200).send();
    } catch(err){
        console.log(err)
        res.status(500).send();
    }
});

module.exports = router;