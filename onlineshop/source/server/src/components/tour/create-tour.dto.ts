import { IsString, IsNumber, IsOptional, MaxLength, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTourDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  description?: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @Type(() => Date)
  startDate?: Date | null;

  @IsOptional()
  @Type(() => Date)
  endDate?: Date | null;

  @IsOptional()
  @IsInt()
  hotelId?: number;
}