import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CountryModule } from './components/country/country.module';
import { HotelModule } from './components/hotel/hotel.module';
import { TourModule } from './components/tour/tour.module';
import { Country } from './components/country/country.entity';
import { Hotel } from './components/hotel/hotel.entity';
import { Tour } from './components/tour/tour.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get<string>('DB_USERNAME', 'root'),
        password: configService.get<string>('DB_PASSWORD', '1296'),
        database: configService.get<string>('DB_NAME', 'tours_db2'),
        entities: [Country, Hotel, Tour],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    CountryModule,
    HotelModule,
    TourModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}