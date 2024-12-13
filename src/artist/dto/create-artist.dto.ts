import {
    IsBoolean,
    IsNotEmpty,
    IsString,
    MinLength,} from "class-validator"
export class CreateArtistDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name:string
    @IsBoolean()
    grammy:boolean
}

        