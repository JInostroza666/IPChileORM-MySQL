import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm"

@Entity()
export class Sucursal {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    Codigo_Sucursal: string

    @Column()
    @IsNotEmpty()
    Codigo_Empresa: string

    @Column()
    @IsNotEmpty()
    Codigo_Comuna: string

    @Column()
    @IsNotEmpty()
    Nombre_Sucursal: string

    @Column()
    @IsNotEmpty()
    Direccion_Sucursal: string

    @Column()
    @IsNotEmpty()
    Telefono_Sucursal: number

    @Column()
    @IsNotEmpty()
    @IsEmail()
    Email_Sucursal: string

}