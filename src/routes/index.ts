import { Router } from "express";
import auth from "./auth";
import user from "./user";
import region from "./region"
import ciudad from "./ciudad";
import comuna from "./comuna";
import empresa from "./empresa";
import sucursal from "./sucursal";
import empleado from "./empleado";
import marca from "./marca";


const routes = Router();

routes.use('/user', user)
routes.use('/auth', auth)
routes.use('/region', region)
routes.use('/ciudad', ciudad)
routes.use('/comuna', comuna)
routes.use('/empresa', empresa)
routes.use('/sucursal', sucursal)
routes.use('/empleado', empleado)
routes.use('/marcas', marca)

export default routes;