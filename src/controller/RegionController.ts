import { Request, Response } from "express"
import { Region } from "../entity/Region"
import { AppDataSource } from "../data-source";
import { validate } from "class-validator";

export class RegionController {

    static nuevaRegion = async (req: Request, res: Response) => {

        const { Codigo_Region, Nombre_Region} = req.body
        const region = new Region();
        region.Codigo_Region=Codigo_Region;
        region.Nombre_Region=Nombre_Region;
        const validationOpt={
            validationError: {target: false, value: false},
        }
        const errors = await validate(region, validationOpt)
        if (errors.length > 0){
            return res.status(400).send(errors)
        }

        const regionRepository = AppDataSource.getRepository(Region)

        try {
            await regionRepository.save(region)
        } catch (error) {
            return res.status(500).json({
                message: "Error creating region!",
                error: error.message
            })
        }
        return res.status(201).json({
            message: "Region Created"
        }

        )

    }

    static getRegions = async (req: Request, res: Response) => {
        const regionRepository = AppDataSource.getRepository(Region)
        let regiones;
        try {
            regiones= await regionRepository.find()
        } catch (error) {
            res.status(500).json({
                message: "Error getting regions!",
                error: error.message
            })
        }
        if(regiones.length > 0){
            return res.send(regiones)
        }else{
            return res.status(404).json({
                message: "No regiones found!"
            })
        }
    }
}    