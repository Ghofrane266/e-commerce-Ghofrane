import { ApiProperty } from "@nestjs/swagger";

export class CreateLikeDto {
    @ApiProperty()
    nombre:number
    @ApiProperty()
    date:Date
    

}
