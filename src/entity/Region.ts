import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany } from "typeorm"
import { Ciudad } from "./Ciudad"

@Entity()
export class Region {

    @PrimaryGeneratedColumn()
    Codigo_Region: string
    
    @Column()
    @IsNotEmpty()
    Nombre_Region: string

    @OneToMany(() => Ciudad, (ciudad) => ciudad.region, {
        cascade: true,
        onDelete:"CASCADE"
    })
    ciudad:Ciudad[]
    region:Region

}