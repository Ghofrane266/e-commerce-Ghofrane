import { ApiProperty } from "@nestjs/swagger";

export class CreatePayementDto {
    @ApiProperty()
    montantPaye: number
    @ApiProperty()
    date: Date
    @ApiProperty()
    statutPayement: string

}
