import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateSandwichDto } from './create-sandwich.dto'; // Import your DTO
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Controller('sandwich')
export class SandwichController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getSandwiches() {
    const sandwiches = await this.prisma.sandwich.findMany();
    return sandwiches;
  }

  @Post()
  async createSandwich(
    @Body(new ValidationPipe()) createSandwichDto: CreateSandwichDto,
  ) {
    const newSandwich = await this.prisma.sandwich.create({
      data: createSandwichDto,
    });
    return newSandwich;
  }
}
