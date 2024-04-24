import { ApiProperty } from "@nestjs/swagger";

export class CreateAbonnementDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
    @ApiProperty()
    price: number


}
