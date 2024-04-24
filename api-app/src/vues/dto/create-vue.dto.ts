import { ApiProperty } from "@nestjs/swagger"

export class CreateVueDto {
    @ApiProperty()
    dateVisite: Date
    @ApiProperty()
    url: string
}
