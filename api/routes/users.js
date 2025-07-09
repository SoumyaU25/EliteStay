import express from "express"
const router = express.Router();
import { createUser, updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


router.get("/checkAuth", verifyToken, (req, res, next)=>{
   res.send("hello user, you are authenticated") 
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("hello admin, you are logged in and you can delete your account")
})


//create
router.post("/", verifyUser, createUser)
//update

router.put("/:id", verifyToken, updateUser)

//delete
router.delete("/:id",verifyUser, deleteUser)
    
//get
router.get("/:id",verifyUser, getUser)

//get all
router.get("/",verifyAdmin, getAllUsers)

export default router