import express from "express";
import {
    getIndicators,
    getIndicatorsById,
    createIndicators,
    updateIndicators,
    deleteIndicator
} from "../controllers/Indicators.js"
import { verifyUser,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/indicators',verifyUser,adminOnly, getIndicators);
router.get('/indicators/:id',verifyUser,adminOnly,getIndicatorsById);
router.post('/indicators',verifyUser,adminOnly,createIndicators);
router.patch('/indicators/:id',verifyUser,adminOnly,updateIndicators);
router.delete('/indicators/:id',verifyUser,adminOnly,deleteIndicator);


export default router;