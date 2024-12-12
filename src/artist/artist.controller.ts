import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import {artist} from "./artist.service"

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  create(@Body() createArtistDto: artist) :Promise<string>{
    return this.artistService.create(createArtistDto);
  }

  @Get()
  findAll() :Promise<string>{
    return this.artistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) :Promise<string>{
    return this.artistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: artist) :Promise<string>{
    return this.artistService.update(+id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) :Promise<string>{
    return this.artistService.remove(+id);
  }
}