import { Request, Response, Router } from "express";
import { Empresa } from "../entity/Empresa";
import { validate } from "class-validator";
import { AppDataSource } from "../data-source";

export class EmpresaController{

    static newEmpresa = async (req: Request, res: Response) => {

        const { Codigo_Empresa, Codigo_Comuna, Razon_Social, Rut_Empresa, 
            Direccion_Empresa, Telefono_Empresa, Email_Empresa, 
            Nombre_Representante, Rut_Representante } = req.body
        const empresa = new Empresa();    
        empresa.Codigo_Empresa=Codigo_Empresa;    
        empresa.Codigo_Comuna=Codigo_Comuna;
        empresa.Razon_Social=Razon_Social;
        empresa.Rut_Empresa=Rut_Empresa;
        empresa.Direccion_Empresa=Direccion_Empresa;
        empresa.Telefono_Empresa=Telefono_Empresa;
        empresa.Email_Empresa=Email_Empresa;
        empresa.Nombre_Representante=Nombre_Representante;
        empresa.Rut_Representante=Rut_Representante;
        const validationOpt={
            validationError: {target: false, value: false},
        }
        const errors = await validate(empresa, validationOpt)
        if (errors.length > 0){
            return res.status(400).send(errors)
        }
        const empresaRepository = AppDataSource.getRepository(Empresa)
        try {
            await empresaRepository.save(empresa)
        } catch (error) {
            return res.status(500).json({
                message: "Error creating empresa!",
                error: error.message
            })
        }
        return res.status(201).json({
            message: "Empresa Created"
    })
    }

    static getEmpresa = async (req: Request, res: Response) => {
    
        const empresaRepository = AppDataSource.getRepository(Empresa)
        let empresas;
        try {
            empresas= await empresaRepository.find()
        } catch (error) {
            res.status(500).json({
                message: "Error getting empresas!",
                error: error.message
            })
        }
        if(empresas.length > 0){
            return res.send(empresas)
        }else{
            return res.status(404).json({
                message: "No empresas found!"
            })
        }

    }
}