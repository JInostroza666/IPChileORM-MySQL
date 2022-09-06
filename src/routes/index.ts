import { Router } from "express";
import region from "./region"
import ciudad from "./ciudad";
import comuna from "./comuna";
import empresa from "./empresa";
import sucursal from "./sucursal";
import empleado from "./empleado";
import marca from "./marca";
import auth from "./auth";


const routes = Router();

routes.use('/region', region)
routes.use('/ciudad', ciudad)
routes.use('/comuna', comuna)
routes.use('/empresa', empresa)
routes.use('/sucursal', sucursal)
routes.use('/empleado', empleado)
routes.use('/auth', auth)
routes.use('/marca', marca)

export default routes;