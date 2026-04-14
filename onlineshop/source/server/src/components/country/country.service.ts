import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country)
        private countryRepository: Repository<Country>
    ) {}

    async findAll(): Promise<Country[]> {
        return this.countryRepository.find({ 
            relations: ['hotels'],
            order: { name: 'ASC' } 
        });
    }

    async create(countryData: Partial<Country>): Promise<Country> {
        const country = this.countryRepository.create(countryData);
        return this.countryRepository.save(country);
    }

    async update(id: number, countryData: Partial<Country>): Promise<Country> {
        await this.countryRepository.update(id, countryData);
        const updatedCountry = await this.countryRepository.findOne({ 
            where: { id },
            relations: ['hotels']
        });
        if (!updatedCountry) {
            throw new NotFoundException(`Country with ID ${id} not found`);
        }
        return updatedCountry;
    }

    async remove(id: number): Promise<void> {
        await this.countryRepository.delete(id);
    }
}
