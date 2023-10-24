// create-sandwich.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateSandwichDto {
  @IsString()
  bread: string;

  @IsString()
  meat: string;

  @IsString()
  salad: string;
}
