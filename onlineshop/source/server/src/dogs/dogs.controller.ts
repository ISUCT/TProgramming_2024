import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
  Put,
  NotFoundException,
} from '@nestjs/common';

import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    try {
      return this.dogsService.create(createDogDto);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('something went wrong');
    }
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    try {
      const dog = await this.dogsService.update(+id, updateDogDto);
      return dog;
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
