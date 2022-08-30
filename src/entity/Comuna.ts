import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne, JoinColumn } from "typeorm"
import { Ciudad } from "./Ciudad"

@Entity()
export class Comuna {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    Codigo_Comuna: number

    @Column()
    @IsNotEmpty()
    Codigo_Ciudad: string

    @Column()
    @IsNotEmpty()
    Nombre_Comuna: string

    @ManyToOne(() => Ciudad, (ciudad) => ciudad.comuna, {
        onDelete:"CASCADE"
    })
    @JoinColumn( { name: 'Codigo_Ciudad' } )
    ciudad:Ciudad
}