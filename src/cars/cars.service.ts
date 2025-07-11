import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/CreateCar.dto';
import { UpdateCarDto } from './dto/UpdateCar.dto';
import { ResponseCarDto } from './dto/ResponseCar.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService){}

  async create(data: CreateCarDto): Promise<ResponseCarDto> {
    try{
      return this.prisma.car.create({
        data: {
          marca: data.marca,
          patente: data.patente,
          modelo: data.modelo,
          kilometraje: data.kilometraje,
          telefono: data.telefono,
          reparado: false
        }
      });
    } catch (error) {
      throw new Error(`Error creating car: ${error.message}`);
    }
  }

  async findAll(): Promise<ResponseCarDto[]> {
    return this.prisma.car.findMany();
  }

  async findOne(id: number): Promise<ResponseCarDto | null> {
    return this.prisma.car.findUnique({
      where: { id: id }
    });
  }

  async update(id: number, data: UpdateCarDto): Promise<ResponseCarDto> | null {
    return this.prisma.car.update({
      where: { id: id },
      data
    });
  }

  async remove(id: number): Promise<ResponseCarDto> | null{
    return this.prisma.car.delete({
      where: { id: id}
    });
  }
}
