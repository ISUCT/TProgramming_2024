import { IsString, MaxLength } from "class-validator";

export class CreateCountryDto {
    @IsString()
    @MaxLength(20)
    name: string;
}
