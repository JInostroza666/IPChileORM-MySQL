import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany } from "typeorm"
import { Ciudad } from "./Ciudad"

@Entity()
export class Region {

    @PrimaryGeneratedColumn()
    Codigo_Region: number
    
    @Column()
    @IsNotEmpty()
    Nombre_Region: string

    @OneToMany(() => Ciudad, (ciudad) => ciudad.region, {
        onDelete:"CASCADE"
    })
    ciudad:Ciudad[]
    region:Region

}