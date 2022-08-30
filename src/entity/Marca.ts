import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm"

@Entity()
export class Marca {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    Codigo_Marca: string

    @Column()
    @IsNotEmpty()
    Rut_Empleado: string

    @CreateDateColumn()
    Fecha: Date

    @Column()
    @IsNotEmpty()
    Tipo: string

    @Column()
    @IsNotEmpty()
    Hash: string

    @Column()
    @IsNotEmpty()
    Latitud: string

    @Column()
    @IsNotEmpty()
    Longitud: string

    @Column()
    @IsNotEmpty()
    Correo_Enviado: string

    @Column()
    @IsNotEmpty()
    Descarga: string

}