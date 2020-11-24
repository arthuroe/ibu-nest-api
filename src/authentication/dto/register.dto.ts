import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export default class RegisterDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    password: string;
}
