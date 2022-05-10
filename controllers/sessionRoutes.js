const express =require('express');
const router = require('express').Router();


router.get("/",(req,res)=>{
    res.json(req.session)
})

module.exports = router;