import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentaireDto {
    @ApiProperty()
    note: number
    @ApiProperty()
    commentaire: string
    @ApiProperty()
    date: Date

}
