import { Router } from "express";
import auth from "./auth";
import user from "./user";
import region from "./region"
import ciudad from "./ciudad";
import comuna from "./comuna";


const routes = Router();

routes.use('/user', user)
routes.use('/auth', auth)
routes.use('/region', region)
routes.use('/ciudad', ciudad)
routes.use('/comuna', comuna)

export default routes;