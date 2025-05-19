import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const entity = this.booksRepository.create(createBookDto);
    const rBook = await this.booksRepository.save(entity);
    return rBook;
  }

  async findAll() {
    const books = await this.booksRepository.find();
    return books;
  }

  async findOne(id: number) {
    return await this.booksRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const entity = await this.booksRepository.findOne({ where: { id } });
    if (!entity) {
      throw new Error(`Book with ${id} not found`);
    }
    Object.assign(entity, updateBookDto);
    await this.booksRepository.save(entity);
    return entity;
  }

  async remove(id: number) {
    const entity = await this.booksRepository.findOne({ where: { id } });
    if (!entity) {
      throw new Error(`Book with ${id} not found`);
    }
    await this.booksRepository.remove(entity);
    return { deleted: true };
  }
}