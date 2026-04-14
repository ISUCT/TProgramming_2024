import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Controller('countries')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    async findAll(): Promise<Country[]> {
        return this.countryService.findAll();
    }

    @Post()
    async create(@Body() country: Partial<Country>): Promise<Country> {
        return this.countryService.create(country);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() country: Partial<Country>
    ): Promise<Country> {
        return this.countryService.update(id, country);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.countryService.remove(id);
    }
}
