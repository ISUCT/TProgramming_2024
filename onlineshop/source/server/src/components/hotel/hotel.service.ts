import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './hotel.entity';

@Injectable()
export class HotelService {
    constructor(
        @InjectRepository(Hotel)
        private hotelRepository: Repository<Hotel>
    ) {}

    async findAll(): Promise<Hotel[]> {
        return this.hotelRepository.find({ 
            relations: ['country', 'tours'],
            order: { name: 'ASC' }
        });
    }

    async create(hotelData: Partial<Hotel>): Promise<Hotel> {
        const hotel = this.hotelRepository.create(hotelData);
        return this.hotelRepository.save(hotel);
    }

    async update(id: number, hotelData: Partial<Hotel>): Promise<Hotel> {
        await this.hotelRepository.update(id, hotelData);
        const updatedHotel = await this.hotelRepository.findOne({ 
            where: { id },
            relations: ['country', 'tours']
        });
        if (!updatedHotel) {
            throw new NotFoundException(`Hotel with ID ${id} not found`);
        }
        return updatedHotel;
    }

    async remove(id: number): Promise<void> {
        await this.hotelRepository.delete(id);
    }
}
