import express from "express";
import {
    getIndicators,
    getIndicatorsById,
    getIndicatorsByUserId,
    createIndicators,
    createIndicatorsJson,
    updateIndicators,
    deleteIndicator
} from "../controllers/Indicators.js"
import { verifyUser,adminOnly } from "../middleware/AuthUser.js";
import { uploadJson } from "../middleware/multer-config2.js";
const router = express.Router();

router.get('/indicators',verifyUser,adminOnly, getIndicators);
router.get('/indicatorsByUser/:id',verifyUser, getIndicatorsByUserId);
router.get('/indicators/:id',verifyUser,adminOnly,getIndicatorsById);
router.post('/indicators',verifyUser,adminOnly,createIndicators);
router.post('/indicators_json',verifyUser,adminOnly,uploadJson.single('file'),createIndicatorsJson);
router.patch('/indicators/:id',verifyUser,adminOnly,updateIndicators);
router.delete('/indicators/:id',verifyUser,adminOnly,deleteIndicator);


export default router;