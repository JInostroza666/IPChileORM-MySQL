import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm"

@Entity()
export class Empleado {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    Rut_Empleado: string

    @Column()
    @IsNotEmpty()
    Codigo_Comuna: string

    @Column()
    @IsNotEmpty()
    Codigo_Sucursal: string

    @Column()
    @IsNotEmpty()
    Nombres: string

    @Column()
    @IsNotEmpty()
    Apellido_Paterno: string

    @Column()
    @IsNotEmpty()
    Apellido_Materno: string

    @Column()
    @IsNotEmpty()
    @IsEmail()
    Telefono_Empleado: number

    @Column()
    @IsNotEmpty()
    Cargo: string

    @Column()
    @IsNotEmpty()
    @IsEmail()
    Email_Empleado: string

    @Column()
    @IsNotEmpty()
    Direccion_Empleado: string

    @Column()
    @IsNotEmpty()
    Estado: string

    @Column()
    @IsNotEmpty()
    Clave: string

    @Column()
    @IsNotEmpty()
    Privilegio: string

}