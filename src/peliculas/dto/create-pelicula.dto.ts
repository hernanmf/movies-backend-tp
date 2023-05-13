import {
  IsString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class CreatePeliculaDto {
  @IsString()
  @IsNotEmpty()
  readonly titulo: string;

  @IsString()
  @IsNotEmpty()
  readonly imagen: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly anio: string;

  @IsNotEmpty()
  @IsString()
  readonly sinopsis: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly duración: string;

  //si opcional y esta vacio no corre las validaciones que vienen despues
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  readonly director?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  readonly idioma?: string;

  @IsNotEmpty()
  @IsString()
  readonly actores: string;

  @IsNotEmpty()
  @IsString()
  readonly generos: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  readonly palabrasClave?: string;
}

/* id
título
imagen
año
sinopsis
duración
director
idioma
lista de actores principales
lista de géneros
palabrasClave */
