
const express = require('express')
const router = express.Router()
const userController = require('../controller/user');



router.get("/admin/getuser", userController.getUsers);

router.post("/admin/add-user", userController.postNewUser);

router.delete("/user/delete-user/:userId",userController.deleteUser)


module.exports=router;