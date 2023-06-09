import express from "express";



import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createContract, updateContract, deleteContractbyid, getContract, getRoom } from "../controllers/contract.js";

const router = express.Router();

//CREATE
router.post("/", createContract);

// //UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
router.put("/:id", updateContract);

// // //DELETE
router.delete("/:id", deleteContractbyid);
// router.delete("/:id", verifyAdmin, deleteHotel);
// // //GET
router.get("/", getRoom);
// ///
router.get("/:id", getContract);
// // router.get("/find/:id", getHotel);
// // //GET ALL
// router.get("/", getHomes);

export default router;
