import { Router } from "express";
import { CiudadController } from "../controller/CiudadController";



const router=Router();

router.post('/', CiudadController.nuevaCiudad);
router.get('/', CiudadController.getCiudades);


export default router;