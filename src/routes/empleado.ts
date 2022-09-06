import { Router } from "express";
import { EmpleadoController } from "../controller/EmpleadoController";
import { checkJwt } from '../middleware/jwt';


const router=Router();

router.post('/', [checkJwt], EmpleadoController.newEmpleado);
router.get('/', EmpleadoController.getEmpleado);

export default router;