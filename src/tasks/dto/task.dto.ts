import { IsNotEmpty, IsString, MinLength } from 'class-validator'
/* eslint-disable prettier/prettier */
export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string
    @IsString()
    @IsNotEmpty()
    description: string
}