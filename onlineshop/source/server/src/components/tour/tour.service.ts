import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tour } from './tour.entity';
import { CreateTourDto } from './create-tour.dto';
import { UpdateTourDto } from './update-tour.dto';

@Injectable()
export class TourService {
  constructor(
    @InjectRepository(Tour)
    private tourRepository: Repository<Tour>,
  ) {}

  private normalizeDate(date?: Date | null): Date | undefined {
    if (!date) return undefined;
    const normalized = new Date(date);
    normalized.setUTCHours(0, 0, 0, 0);
    return normalized;
  }

  async findAll(): Promise<Tour[]> {
    return this.tourRepository.find({
      relations: ['hotel', 'hotel.country'],
      order: { id: 'DESC' },
    });
  }

  async create(createTourDto: CreateTourDto): Promise<Tour> {
    const tour = this.tourRepository.create({
      name: createTourDto.name,
      description: createTourDto.description,
      price: createTourDto.price,
      startDate: this.normalizeDate(createTourDto.startDate),
      endDate: this.normalizeDate(createTourDto.endDate),
      hotel: createTourDto.hotelId ? { id: createTourDto.hotelId } : undefined,
    });

    const savedTour = await this.tourRepository.save(tour);
    
    return this.tourRepository.findOne({
      where: { id: savedTour.id },
      relations: ['hotel', 'hotel.country'],
    });
  }

  async update(id: number, updateTourDto: UpdateTourDto): Promise<Tour> {
    await this.tourRepository.update(id, {
      name: updateTourDto.name,
      description: updateTourDto.description,
      price: updateTourDto.price,
      startDate: this.normalizeDate(updateTourDto.startDate),
      endDate: this.normalizeDate(updateTourDto.endDate),
      hotel: updateTourDto.hotelId ? { id: updateTourDto.hotelId } : null,
    });

    const updatedTour = await this.tourRepository.findOne({
      where: { id },
      relations: ['hotel', 'hotel.country'],
    });

    if (!updatedTour) {
      throw new NotFoundException(`Tour with ID ${id} not found`);
    }
    return updatedTour;
  }

  async remove(id: number): Promise<void> {
    await this.tourRepository.delete(id);
  }
}