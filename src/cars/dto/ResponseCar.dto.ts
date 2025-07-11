import { BaseCarDto } from "./BaseCar.dto";
import { ApiProperty } from '@nestjs/swagger';
import { Type } from "class-transformer";
import { IsBoolean } from "class-validator";

export class ResponseCarDto extends BaseCarDto{
    @ApiProperty()
    @IsBoolean()
    @Type(() => Boolean)
    reparado: boolean;
}