import { Router } from "express";
import { RegionController } from "../controller/RegionController";


const router=Router();

router.post('/', RegionController.nuevaRegion);
router.get('/', RegionController.getRegions);

export default router;