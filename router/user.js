const express=require('express')
const router=express.Router();
const controller=require('../controller/user')
router.post('/create',controller.register)
router.get('/:id',controller.getSingleuser);
router.put('/update/:id',controller.updateuser);
router.delete('/delete/:id',controller.deleteuser)
router.post('/login',controller.login)
module.exports=router