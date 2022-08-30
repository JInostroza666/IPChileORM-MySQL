import { Router } from "express";
import { ComunaController } from "../controller/ComunaController";


const router=Router();

router.post('/', ComunaController.nuevaComuna);
router.get('/', ComunaController.getComunas);

export default router;