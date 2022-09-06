import { Router } from "express";
import { EmpleadoController } from "../controller/EmpleadoController";
import { checkJwt } from '../middleware/jwt';


const router=Router();

router.post('/', [checkJwt], EmpleadoController.newEmpleado);
router.get('/', EmpleadoController.getEmpleado);
router.get('/:Rut_Empleado', EmpleadoController.getByRut);
router.delete('/:Rut_Empleado', EmpleadoController.delete);
router.patch('/:Rut_Empleado', EmpleadoController.update);

export default router;