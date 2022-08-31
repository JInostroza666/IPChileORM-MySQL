import { Router } from "express";
import { MarcaController } from "../controller/MarcaController";


const router = Router();

router.post('/', MarcaController.newMarca);
router.get('/', MarcaController.getMarca);

export default router;