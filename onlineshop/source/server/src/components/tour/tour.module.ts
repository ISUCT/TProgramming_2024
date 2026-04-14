import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourController } from './tour.controller';
import { TourService } from './tour.service';
import { Tour } from './tour.entity';
import { HotelModule } from '../hotel/hotel.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tour]),
    HotelModule
  ],
  controllers: [TourController],
  providers: [TourService],
  exports: [TourService]
})
export class TourModule {}
