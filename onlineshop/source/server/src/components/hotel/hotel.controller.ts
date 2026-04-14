import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';

@Controller('hotels')
export class HotelController {
    constructor(private readonly hotelService: HotelService) {}

    @Get()
    async findAll(): Promise<Hotel[]> {
        return this.hotelService.findAll();
    }

    @Post()
    async create(@Body() hotel: Partial<Hotel>): Promise<Hotel> {
        return this.hotelService.create(hotel);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() hotel: Partial<Hotel>
    ): Promise<Hotel> {
        return this.hotelService.update(id, hotel);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.hotelService.remove(id);
    }
}
