import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateImageDto {

    @ApiProperty()
    @IsNotEmpty()
    url: string;
    @ApiProperty()
    @IsNotEmpty()
    alt: string;
    @ApiProperty()
    @IsNumber()
    productId:number


}
