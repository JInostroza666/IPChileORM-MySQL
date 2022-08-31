import { Router } from "express";
import { EmpleadoController } from "../controller/EmpleadoController";


const router=Router();

router.post('/', EmpleadoController.newEmpleado);
router.get('/', EmpleadoController.getEmpleado);

export default router;