import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Empleado } from "../entity/Empleado";


export class EmpleadoController {

    static newEmpleado = async (req: Request, res: Response) => {

        const { Rut_Empleado, Codigo_Comuna, Codigo_Sucursal, Nombres, Apellido_Paterno, Apellido_Materno,
        Telefono_Empleado, Cargo, Email_Empleado, Direccion_Empleado, Estado, Clave, Privilegio } = req.body
        const empleado = new Empleado();
        empleado.Rut_Empleado=Rut_Empleado;
        empleado.Codigo_Comuna=Codigo_Comuna;
        empleado.Codigo_Sucursal=Codigo_Sucursal;
        empleado.Nombres=Nombres;
        empleado.Apellido_Paterno=Apellido_Paterno;
        empleado.Apellido_Materno=Apellido_Materno;
        empleado.Telefono_Empleado=Telefono_Empleado;
        empleado.Cargo=Cargo;
        empleado.Email_Empleado=Email_Empleado;
        empleado.Direccion_Empleado=Direccion_Empleado;
        empleado.Estado=Estado;
        empleado.Clave=Clave;
        empleado.Privilegio=Privilegio;

        const validateOpt = { validationError: { target: false, value: false } };

        const errors = await validate(empleado, validateOpt);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        const empleadoRepository = AppDataSource.getRepository(Empleado);
        try {
            empleado.hashPassword();
            await empleadoRepository.save(empleado)
        } catch (error) {
            return res.status(500).json({
                message: "Error creating empleado",
                error: error.message
            })
        }
        return res.status(201).json({
            message: "Empleado Created"
    })
    }

    static getEmpleado = async (req: Request, res: Response) => {

        const empleadoRepository = AppDataSource.getRepository(Empleado);
        let empleados;
        try {
            empleados = await empleadoRepository.find();
        } catch (error) {
            res.status(500).json({
                message: "Error getting empleados!",
                error: error.message
            })
        }
        if (empleados.length > 0) {
            return res.send(empleados);
        } else {
            return res.status(404).json({
                message: "No empleados found!"
            })
        }

    }

    static getByRut = async (req: Request, res: Response) => {
        const { Rut_Empleado } = req.params
        const empleadoRepository = AppDataSource.getRepository(Empleado)
        try {
            const empleado = await empleadoRepository.findOneByOrFail({Rut_Empleado})
            res.send(empleado)
        } catch (error) {
            res.status(404).json({
                message: "User not found",
                error: error.message
            })
        }
    }

    static delete = async (req: Request, res: Response) => {
        const { Rut_Empleado } = req.params;
        const empleadoRepository = AppDataSource.getRepository(Empleado)
        let empleado : Empleado;
        try {
            empleado = await empleadoRepository.findOneByOrFail({ Rut_Empleado })
        } catch (error) {
            return res.status(404).json({
                message: "User not found",
                error: error.message
            })
        }
        try {
            await empleadoRepository.delete(empleado.Rut_Empleado);
            res.status(200).json({
                message: "Empleado deleted"
            })
        } catch (error) {
            res.status(500).json({
                message: "Error deleting user"+Rut_Empleado,
                error: error.message,
            })
        }
    }

    static update = async (req: Request, res: Response) => {
        let empleado;
        const { Rut_Empleado } = req.params;
        const { Codigo_Comuna, Codigo_Sucursal, Nombres, Apellido_Paterno, Apellido_Materno,
            Telefono_Empleado, Cargo, Email_Empleado, Direccion_Empleado, Estado, Clave, Privilegio } = req.body;
        const empleadoRepository = AppDataSource.getRepository(Empleado)
        try {
            empleado = await empleadoRepository.findOneByOrFail({ Rut_Empleado })
            empleado.Codigo_Comuna = Codigo_Comuna;
            empleado.Codigo_Sucursal = Codigo_Sucursal;
            empleado.Nombres = Nombres;
            empleado.Apellido_Paterno = Apellido_Paterno;
            empleado.Apellido_Materno = Apellido_Materno;
            empleado.Telefono_Empleado = Telefono_Empleado;
            empleado.Cargo = Cargo;
            empleado.Email_Empleado = Email_Empleado;
            empleado.Direccion_Empleado = Direccion_Empleado;
            empleado.Estado = Estado;
            empleado.Clave = Clave;
            empleado.Privilegio = Privilegio;
        } catch (error) {
            return res.status(404).json({
                message: "Empleado not found",
                error: error.message
            })
        }

        const validationOpt = { validationError: { target: false, value: false } }
        const errors = await validate(empleado, validationOpt)
        if (errors.length > 0) {
            return res.status(400).send(errors)
        }
        try {
            await empleadoRepository.save(empleado)
        } catch (error) {
            res.status(500).json({
                message: "Error updating empleado",
                error: error.message
            })
        }
        res.status(204).json({
            message: "Empleado updated"
        })


    }

}