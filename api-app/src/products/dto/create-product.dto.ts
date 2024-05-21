import { IsArray, IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateProductDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;
    @ApiProperty()
    @IsNotEmpty()
    description?: string;
    @ApiProperty()
    @IsNotEmpty()
    link: string;
    @ApiProperty()
    @IsNumber()
    price: number;


}
