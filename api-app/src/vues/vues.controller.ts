import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VuesService } from './vues.service';
import { CreateVueDto } from './dto/create-vue.dto';
import { UpdateVueDto } from './dto/update-vue.dto';

@Controller('vues')
export class VuesController {
  constructor(private readonly vuesService: VuesService) {}

  @Post()
  create(@Body() createVueDto: CreateVueDto) {
    return this.vuesService.create(createVueDto);
  }

  @Get()
  findAll() {
    return this.vuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVueDto: UpdateVueDto) {
    return this.vuesService.update(+id, updateVueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vuesService.remove(+id);
  }
}
