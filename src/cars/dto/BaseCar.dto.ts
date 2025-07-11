import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class BaseCarDto {
    @ApiProperty()
    @IsString()
    @Type(() => String)
    marca: string;

    @ApiProperty()
    @IsString()
    @Type(() => String)
    patente: string;

    @ApiProperty()
    @IsString()
    @Type(() => String)
    modelo: string;

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    kilometraje: number;

    @ApiProperty()
    @IsString()
    @Type(() => String)
    telefono: string;
}