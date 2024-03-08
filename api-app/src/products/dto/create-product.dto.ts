import { IsNotEmpty,IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateProductDto {
@ApiProperty()    
@IsNotEmpty()
title:string;
@ApiProperty()
@IsNotEmpty()
description ?:string;
@ApiProperty()
@IsNotEmpty()
image:string;
@ApiProperty()
@IsNotEmpty()
url:string;
@ApiProperty()
@IsNumber()
price:number;
 

}
