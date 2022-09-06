import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToMany, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Comuna } from "./Comuna"
import { Region } from "./Region"

@Entity()
export class Ciudad {

    @PrimaryGeneratedColumn()
    Codigo_Ciudad: number

    @Column()
    @IsNotEmpty()
    Codigo_Region: number

    @Column()
    @IsNotEmpty()
    Nombre_Ciudad: string

    @ManyToOne(() => Region, (region) => region.ciudad, {
        onDelete:"CASCADE"
    })
    @JoinColumn( { name: 'Codigo_Region' } )
    region:Region

    @OneToMany(() => Comuna, (comuna) => comuna.ciudad, {
        onDelete:"CASCADE"
    })
    comuna:Comuna[]
    ciudad:Ciudad

}