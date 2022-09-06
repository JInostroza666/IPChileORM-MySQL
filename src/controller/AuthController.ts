import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Empleado } from "../entity/Empleado";
import * as jwt from 'jsonwebtoken';
import config from "../config/config";

class AuthController {
    static login = async (req: Request, res: Response) => {

        const { Email_Empleado, Clave } = req.body

        if (!(Email_Empleado && Clave)) {
            return res.status(400).json({
                message: "Missing data"
            })
        }
        const authRepo = AppDataSource.getRepository(Empleado);
        let empleado: Empleado;
        try {
            empleado = await authRepo.findOneOrFail({
                where: {
                    Email_Empleado
                }
            })
        } catch (error) {
            return res.status(452).json({
                message: "Error getting empleado",
                error: error.message
            })
        }

        if (!empleado.checkPassword(Clave)) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({
            empleadoId:empleado.Email_Empleado},
            config.jwtSecret, {expiresIn: '1h'}
        );    


        return res.status(200).json({
            message: "Login Successful",
            token: token
        })
    }
}    

export default AuthController