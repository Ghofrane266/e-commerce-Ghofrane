import { ApiProperty } from "@nestjs/swagger"

export class CreateOrderDto {
    @ApiProperty()
    statutCommande: string
    @ApiProperty()
    dateCommande: string
    @ApiProperty()
    quantite: number
    @ApiProperty()
    montant: number

}
