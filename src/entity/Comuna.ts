import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Ciudad } from "./Ciudad"
import { Empleado } from "./Empleado"
import { Empresa } from "./Empresa"
import { Sucursal } from "./Sucursal"

@Entity()
export class Comuna {

    @PrimaryGeneratedColumn()
    Codigo_Comuna: number

    @Column()
    @IsNotEmpty()
    Codigo_Ciudad: number

    @Column()
    @IsNotEmpty()
    Nombre_Comuna: string

    @ManyToOne(() => Ciudad, (ciudad) => ciudad.comuna, {
        onDelete:"CASCADE"
    })
    @JoinColumn( { name: 'Codigo_Ciudad' } )
    ciudad:Ciudad

    @OneToMany(() => Empresa, (empresa) => empresa.comuna, {
        onDelete:"CASCADE"
    })
    empresa:Empresa[]
    comuna:Comuna

    @OneToMany(() => Sucursal, (sucursal) => sucursal.comuna, {
        onDelete:"CASCADE"
    })
    sucursal:Sucursal[]
    comuna2:Comuna

    @OneToMany(() => Empleado, (empleado) => empleado.comuna, {
        onDelete:"CASCADE"
    })
    empleado:Empleado[]
    comuna3:Comuna
}