import { PartialType } from '@nestjs/mapped-types';
import { CreateDogDto } from './create-dog.dto';

export class UpdateDogDto extends PartialType(CreateDogDto) {
  id: number;
  name: string;
  age: number;
}
