import { Router } from "express";
import { EmpresaController } from "../controller/EmpresaController";



const router = Router();

router.post("/", EmpresaController.newEmpresa);
router.get("/", EmpresaController.getEmpresa);

export default router;