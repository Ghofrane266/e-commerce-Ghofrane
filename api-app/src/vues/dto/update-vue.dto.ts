import { PartialType } from '@nestjs/swagger';
import { CreateVueDto } from './create-vue.dto';

export class UpdateVueDto extends PartialType(CreateVueDto) {}
