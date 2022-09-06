import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import comuna from "../routes/comuna"
import { Comuna } from "./Comuna"
import { Sucursal } from "./Sucursal"


@Entity()
export class Empresa {

    @PrimaryGeneratedColumn()
    Codigo_Empresa: number

    @Column()
    @IsNotEmpty()
    Codigo_Comuna: number

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

    @ManyToOne(() => Comuna, (comuna) => comuna.empresa, {
        onDelete:"CASCADE"
    })
    @JoinColumn( { name: 'Codigo_Comuna' } )
    comuna:Comuna

    @OneToMany(() => Sucursal, (sucursal) => sucursal.empresa, {
        onDelete:"CASCADE"
    })
    sucursal:Sucursal[]
    empresa:Empresa

}