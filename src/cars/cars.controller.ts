import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Roles } from 'nest-keycloak-connect';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/CreateCar.dto';
import { UpdateCarDto } from './dto/UpdateCar.dto';
import { ApiOperation } from '@nestjs/swagger';
import { ResponseCarDto } from './dto/ResponseCar.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new car' })
  @Roles({ roles: ['Super_Admin', 'Admin', 'User'] })
  create(@Body() createCarDto: CreateCarDto): Promise<ResponseCarDto> {
    return this.carsService.create(createCarDto);
  }
  
  @Get()
  @ApiOperation({ summary: 'Returns all cars' })
  @Roles({ roles: ['Super_Admin', 'Admin', 'User'] })
  findAll(): Promise<ResponseCarDto[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds a car by id' })
  @Roles({ roles: ['Super_Admin', 'Admin', 'User'] })
  findOne(@Param('id') id: string): Promise<ResponseCarDto> {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates a car by id' })
  @Roles({ roles: ['Super_Admin', 'Admin'] })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto): Promise<ResponseCarDto> {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes a car by id' })
  @Roles({ roles: ['Super_Admin'] })
  remove(@Param('id') id: string): Promise<ResponseCarDto> {
    return this.carsService.remove(+id);
  }
}
