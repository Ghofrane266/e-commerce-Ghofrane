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
    @IsArray()
    @IsNotEmpty()
    images: { url: string, alt: string }[];
    @ApiProperty()
    @IsNotEmpty()
    url: string;
    @ApiProperty()
    @IsNotEmpty()
    alt: string;
    @ApiProperty()
    @IsNumber()
    price: number;


}
