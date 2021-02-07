const express=require('express');
const controller=require('../controller/paperController');

const router=express.Router();

router.post("/save",controller.savePaper);
router.get('/check',controller.check);

module.exports=router;
