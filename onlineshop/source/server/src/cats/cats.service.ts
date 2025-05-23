import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  cats: Cat[] = [
    {
        id: 1,
        name: 'Vasya',
        age: 2
    },
    {
        id: 2,
        name: 'Pushok',
        age: 3
    },
  ]

  create(createCatDto: CreateCatDto) {
    const newCat: Cat = {
        id: this.cats.length + 1,
        ...createCatDto
    }
    this.cats.push(newCat);
    return newCat;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find((cat:Cat) => 
        {return cat.id === id});
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
