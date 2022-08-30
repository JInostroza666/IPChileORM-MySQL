import { Request, Response } from "express"
import { Ciudad } from "../entity/Ciudad"
import { AppDataSource } from "../data-source";
import { validate } from "class-validator";

export class CiudadController {

    static nuevaCiudad = async (req: Request, res: Response) => {

        const { Codigo_Ciudad, Codigo_Region, Nombre_Ciudad} = req.body
        const ciudad = new Ciudad();
        ciudad.Codigo_Ciudad=Codigo_Ciudad;
        ciudad.Codigo_Region=Codigo_Region;
        ciudad.Nombre_Ciudad=Nombre_Ciudad;
        const validationOpt={
            validationError: {target: false, value: false},
        }
        const errors = await validate(ciudad, validationOpt)
        if (errors.length > 0){
            return res.status(400).send(errors)
        }

        const ciudadRepository = AppDataSource.getRepository(Ciudad)

        try {
            await ciudadRepository.save(ciudad)
        } catch (error) {
            return res.status(500).json({
                message: "Error creating ciudad!",
                error: error.message
            })
        }
        return res.status(201).json({
            message: "Ciudad Created"
        }

        )

    }

    static getCiudades = async (req: Request, res: Response) => {
        const ciudadRepository = AppDataSource.getRepository(Ciudad)
        let ciudades;
        try {
            ciudades= await ciudadRepository.find()
        } catch (error) {
            res.status(500).json({
                message: "Error getting ciudades!",
                error: error.message
            })
        }
        if(ciudades.length > 0){
            return res.send(ciudades)
        }else{
            return res.status(404).json({
                message: "No ciudades found!"
            })
        }
    }
}