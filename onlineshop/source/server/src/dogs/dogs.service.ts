import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './entities/dog.entity';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}

  async create(createDogDto: CreateDogDto) {
    // const dog = new Dog();
    // dog.name = createDogDto.name;
    // dog.age = createDogDto.age;
    const entity = this.dogsRepository.create(createDogDto);
    const rDog = await this.dogsRepository.save(entity);
    return rDog;
  }

  async findAll() {
    const dogs = await this.dogsRepository.find();
    return dogs;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  async update(id: number, updateDogDto: UpdateDogDto) {
    const entity = await this.dogsRepository.findOne({ where: { id } });
    if (!entity) {
      throw new Error(`Dog with ${id} not found`);
    }
    entity.name = updateDogDto.name;
    entity.age = updateDogDto.age;
    await this.dogsRepository.save(entity);
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
