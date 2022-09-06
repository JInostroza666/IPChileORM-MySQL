import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToMany, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Comuna } from "./Comuna"
import { Region } from "./Region"

@Entity()
export class Ciudad {

    @PrimaryGeneratedColumn()
    Codigo_Ciudad: string

    @Column()
    @IsNotEmpty()
    Codigo_Region: string

    @Column()
    @IsNotEmpty()
    Nombre_Ciudad: string

    @ManyToOne(() => Region, (region) => region.ciudad, {
    })
    @JoinColumn( { name: 'Codigo_Region' } )
    region:Region

    @OneToMany(() => Comuna, (comuna) => comuna.ciudad, {
        cascade: true,
        onDelete:"CASCADE"
    })
    comuna:Comuna[]
    ciudad:Ciudad

}