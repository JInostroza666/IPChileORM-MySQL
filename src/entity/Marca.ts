import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToMany, ManyToOne, JoinColumn } from "typeorm"
import { Empleado } from "./Empleado"

@Entity()
export class Marca {

    @PrimaryGeneratedColumn()
    Codigo_Marca: number

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

   @ManyToOne(() => Empleado, (empleado) => empleado.marca, {
        onDelete:"CASCADE"
    })
    @JoinColumn( { name: 'Rut_Empleado' } )
    empleado:Empleado

}