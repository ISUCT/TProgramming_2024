import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";
import { Hotel } from "../hotel/hotel.entity";

@Entity({ name: 'Countries' })
export class Country {
    @PrimaryGeneratedColumn({ name: 'CountryID' })
    id: number;

    @Column({ name: 'Name', length: 20 })
    name: string;

    @OneToMany(() => Hotel, (hotel) => hotel.country)
    hotels: Hotel[];
}
