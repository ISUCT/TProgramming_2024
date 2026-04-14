import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Country } from "../country/country.entity";
import { Tour } from "../tour/tour.entity";

@Entity({ name: 'Hotels' })
export class Hotel {
    @PrimaryGeneratedColumn({ name: 'HotelID' })
    id: number;

    @Column({ name: 'Name', length: 40 })
    name: string;

    @Column({ name: 'Address', length: 100 })
    address: string;

    @Column({ name: 'Rooms' })
    rooms: number;

    @ManyToOne(() => Country, (country) => country.hotels)
    @JoinColumn({ name: 'CountryID' })
    country: Country;

    @OneToMany(() => Tour, (tour) => tour.hotel)
    tours: Tour[];
}
