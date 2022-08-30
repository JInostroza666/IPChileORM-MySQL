import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm"


@Entity()
export class Empresa {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    Codigo_Empresa: string

    @Column()
    @IsNotEmpty()
    Codigo_Comuna: string

    @Column()
    @IsNotEmpty()
    Razon_Social: string

    @Column()
    @IsNotEmpty()
    Rut_Empresa: string

    @Column()
    @IsNotEmpty()
    Direccion_Empresa: string

    @Column()
    @IsNotEmpty()
    Telefono_Empresa: number

    @Column()
    @IsNotEmpty()
    @IsEmail()
    Email_Empresa: string

    @Column()
    @IsNotEmpty()
    Nombre_Representante: string

    @Column()
    @IsNotEmpty()
    Rut_Representante: string


}