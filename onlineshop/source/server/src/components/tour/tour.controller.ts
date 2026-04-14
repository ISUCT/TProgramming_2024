import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TourService } from './tour.service';
import { CreateTourDto } from './create-tour.dto';
import { UpdateTourDto } from './update-tour.dto';

@Controller('tours')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get()
  async findAll() {
    return this.tourService.findAll();
  }

  @Post()
  async create(@Body() createTourDto: CreateTourDto) {
    return this.tourService.create(createTourDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTourDto: UpdateTourDto) {
    return this.tourService.update(+id, updateTourDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.tourService.remove(+id);
  }
}