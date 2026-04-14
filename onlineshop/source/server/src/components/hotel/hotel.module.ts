import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';
import { CountryModule } from '../country/country.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hotel]),
    CountryModule
  ],
  controllers: [HotelController],
  providers: [HotelService],
  exports: [HotelService]
})
export class HotelModule {}
