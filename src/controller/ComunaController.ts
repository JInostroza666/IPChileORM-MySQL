import { Request, Response } from "express"
import { Comuna } from "../entity/Comuna"
import { AppDataSource } from "../data-source";
import { validate } from "class-validator";

export class ComunaController {

    static nuevaComuna = async (req: Request, res: Response) => {

        const { Codigo_Comuna, Codigo_Ciudad, Nombre_Comuna} = req.body
        const comuna = new Comuna();
        comuna.Codigo_Comuna=Codigo_Comuna;
        comuna.Codigo_Ciudad=Codigo_Ciudad;
        comuna.Nombre_Comuna=Nombre_Comuna;
        const validationOpt={
            validationError: {target: false, value: false},
        }
        const errors = await validate(comuna, validationOpt)
        if (errors.length > 0){
            return res.status(400).send(errors)
        }

        const comunaRepository = AppDataSource.getRepository(Comuna)

        try {
            await comunaRepository.save(comuna)
        } catch (error) {
            return res.status(500).json({
                message: "Error creating comuna!",
                error: error.message
            })
        }
        return res.status(201).json({
            message: "Comuna Created"
        }

        )

    }

    static getComunas = async (req: Request, res: Response) => {
        const comunaRepository = AppDataSource.getRepository(Comuna)
        let comunas;
        try {
            comunas= await comunaRepository.find()
        } catch (error) {
            res.status(500).json({
                message: "Error getting comuans!",
                error: error.message
            })
        }
        if(comunas.length > 0){
            return res.send(comunas)
        }else{
            return res.status(404).json({
                message: "No comunas found!"
            })
        }
    }
}