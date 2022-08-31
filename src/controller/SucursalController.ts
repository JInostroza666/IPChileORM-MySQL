import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Sucursal } from "../entity/Sucursal";


export class SucursalController {
    static newSucursal = async (req: Request, res: Response) => {
        const { Codigo_Sucursal, Codigo_Empresa, Nombre_Sucursal, Direccion_Sucursal, Telefono_Sucursal, Codigo_Comuna, Email_Sucursal } = req.body
        const sucursal = new Sucursal();
        sucursal.Codigo_Sucursal=Codigo_Sucursal;
        sucursal.Codigo_Empresa=Codigo_Empresa;
        sucursal.Nombre_Sucursal=Nombre_Sucursal;
        sucursal.Direccion_Sucursal=Direccion_Sucursal;
        sucursal.Telefono_Sucursal=Telefono_Sucursal;
        sucursal.Codigo_Comuna=Codigo_Comuna;
        sucursal.Email_Sucursal=Email_Sucursal;
        const validationOpt={
            validationError: {target: false, value: false},
        }
        const errors = await validate(sucursal, validationOpt)
        if (errors.length > 0){
            return res.status(400).send(errors)
        }

        const sucursalRepository = AppDataSource.getRepository(Sucursal)

        try {
            await sucursalRepository.save(sucursal)
        } catch (error) {
            return res.status(500).json({
                message: "Error creating sucursal!",
                error: error.message
            })
        }
        return res.status(201).json({
            message: "Sucursal Created"
        }

        )
    }

    static getSucursal = async (req: Request, res: Response) => {
        const sucursalRepository = AppDataSource.getRepository(Sucursal)
        let sucursales;
        try {
            sucursales= await sucursalRepository.find()
        } catch (error) {
            res.status(500).json({
                message: "Error getting sucursales!",
                error: error.message
            })
        }
        if(sucursales.length > 0){
            return res.send(sucursales)
        }else{
            return res.status(404).json({
                message: "No sucursales found!"
            })
        }
    }
}