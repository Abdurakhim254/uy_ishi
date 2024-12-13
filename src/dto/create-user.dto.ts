import {IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsStrongPassword,
    MinLength,}from "class-validator"
export class CreateUSerDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name:string
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    last_name:string
    @IsNumber()
    @IsNotEmpty()
    @MinLength(3)
    age:number
    @IsString()
    @IsEmail()
    @MinLength(6)
    email:string
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password:string
}
        