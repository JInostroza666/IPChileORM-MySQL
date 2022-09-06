import "reflect-metadata"
import { DataSource } from "typeorm"
import { Ciudad } from "./entity/Ciudad"
import { Comuna } from "./entity/Comuna"
import { Empleado } from "./entity/Empleado"
import { Empresa } from "./entity/Empresa"
import { Marca } from "./entity/Marca"
import { Region } from "./entity/Region"
import { Sucursal } from "./entity/Sucursal"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "marca",
    synchronize: true,
    logging: false,
    entities: [Ciudad, Comuna, Empleado, Empresa, Marca, Region, Sucursal],
    migrations: [],
    subscribers: [],
})
