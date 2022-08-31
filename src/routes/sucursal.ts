import { Router } from "express";
import { SucursalController } from "../controller/SucursalController";




const router = Router();

router.post("/", SucursalController.newSucursal);
router.get("/", SucursalController.getSucursal);

export default router;