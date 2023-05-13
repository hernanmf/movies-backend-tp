import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe, ParseUUIDPipe} from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

@Controller('peliculas')
@UsePipes( ValidationPipe )
export class PeliculasController {

  constructor(private readonly peliculasService: PeliculasService) {}

  @Get()
  findAll() {
    return this.peliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.peliculasService.findOne(id);
  }

  @Post()
  create(@Body() createPeliculaDto: CreatePeliculaDto) {
    return this.peliculasService.create(createPeliculaDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePeliculaDto: UpdatePeliculaDto
  ) {
    return this.peliculasService.update(id, updatePeliculaDto);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseUUIDPipe)
    id: string
  ) {
    return this.peliculasService.remove(id);
  }
}
