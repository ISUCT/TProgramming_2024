import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { Hotel } from "../hotel/hotel.entity";

@Entity({ name: 'Tours' })
export class Tour {
    @PrimaryGeneratedColumn({ name: 'TourID' })
    id: number;

    @Column({ name: 'Name', length: 50 })
    name: string;

    @Column({ name: 'Description', length: 200, nullable: true })
    description?: string;

    @Column({ name: 'Price', type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ name: 'Start_date', type: 'date', nullable: true })
    startDate?: Date;

    @Column({ name: 'End_date', type: 'date', nullable: true })
    endDate?: Date;

    @ManyToOne(() => Hotel, (hotel) => hotel.tours)
    @JoinColumn({ name: 'HotelID' })
    hotel: Hotel;

    @BeforeInsert()
    @BeforeUpdate()
    formatDates() {
        if (this.startDate) {
            this.startDate = new Date(this.startDate);
            this.startDate.setHours(0, 0, 0, 0);
        }
        if (this.endDate) {
            this.endDate = new Date(this.endDate);
            this.endDate.setHours(0, 0, 0, 0);
        }
    }
}