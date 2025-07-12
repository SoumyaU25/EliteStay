import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";

//create
router.post("/:hotelid",verifyAdmin, createRoom)
//update

router.put("/:id",verifyAdmin, updateRoom)

//delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)
    
//get
router.get("/:id", getRoom)

//get all
router.get("/", getRooms)

router.put("/availability/:id", updateRoomAvailability)

export default router