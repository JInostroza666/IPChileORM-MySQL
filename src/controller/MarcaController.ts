import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Marca } from "../entity/Marca";

export class MarcaController {
    
    static newMarca = async (req: Request, res: Response) => {

        const { Codigo_Marca, Rut_Empleado, Fecha, Tipo, Hash, Latitud, Longitud, Correo_Enviado, Descarga } = req.body
        const marca = new Marca();
        marca.Codigo_Marca=Codigo_Marca;
        marca.Rut_Empleado=Rut_Empleado;
        marca.Fecha=Fecha;
        marca.Tipo=Tipo;
        marca.Hash=Hash;
        marca.Latitud=Latitud;
        marca.Longitud=Longitud;
        marca.Correo_Enviado=Correo_Enviado;
        marca.Descarga=Descarga;
        const validateOpt = { validationError: { target: false, value: false } };
        const errors = await validate(marca, validateOpt);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        const marcaRepository = AppDataSource.getRepository(Marca);
        try {
            await marcaRepository.save(marca);
        }
        catch (error) {
            return res.status(500).json({
                message: "Error creating marca!",
                error: error.message
            })
        }
        return res.status(201).json({
            message: "Marca Created"

    })
    }
    static getMarca = async (req: Request, res: Response) => {
            
            const marcaRepository = AppDataSource.getRepository(Marca);
            let marcas;
            try {
                marcas = await marcaRepository.find();
            } catch (error) {
                res.status(500).json({
                    message: "Error getting marcas!",
                    error: error.message
                })
            }
            if (marcas.length > 0) {
                return res.status(200).json(marcas);
            }
            return res.status(404).json({ message: "Not result" });
        }

}   