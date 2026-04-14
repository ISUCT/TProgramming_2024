import { IsString, IsInt, MaxLength, IsOptional } from "class-validator";

export class CreateHotelDto {
    @IsString()
    @MaxLength(40)
    name: string;

    @IsString()
    @MaxLength(100)
    address: string;

    @IsInt()
    rooms: number;

    @IsOptional()
    @IsInt()
    countryId?: number;
}