import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCarDto } from './CreateCar.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';


export class UpdateCarDto extends PartialType(CreateCarDto) {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    reparado?: boolean;
}
