import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Comuna } from "./Comuna"
import { Empleado } from "./Empleado"
import { Empresa } from "./Empresa"

@Entity()
export class Sucursal {

    @PrimaryGeneratedColumn()
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
    @IsEmail()
    Email_Sucursal: string

    @ManyToOne(() => Empresa, (empresa) => empresa.sucursal, {
        onDelete:"CASCADE"
    })
    @JoinColumn( { name: 'Codigo_Empresa' } )
    empresa:Empresa

    @ManyToOne(() => Comuna, (comuna) => comuna.sucursal, {
        onDelete:"CASCADE"
    })
    @JoinColumn( { name: 'Codigo_Comuna' } )
    comuna:Comuna

    @OneToMany(() => Empleado, (empleado) => empleado.sucursal, {
        cascade: true,
        onDelete:"CASCADE"
    })
    empleado:Empleado[]
    sucursal:Sucursal

}