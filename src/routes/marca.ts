import { Router } from "express";
import { MarcaController } from "../controller/MarcaController";


const router = Router();

router.post('/', MarcaController.newMarca);
router.get('/', MarcaController.getMarca);
router.get('/:Codigo_Marca', MarcaController.getByCodigoMarca);
router.delete('/:Codigo_Marca', MarcaController.delete);
router.patch('/:Codigo_Marca', MarcaController.update);

export default router;