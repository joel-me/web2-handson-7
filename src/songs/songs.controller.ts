import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { get } from 'http';
import { SongsService } from './songs.service';
import { CreatSongDTO } from './create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreatSongDTO) {
    return this.songsService.create(createSongDTO);
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.songsService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() createSongDTO: CreatSongDTO) {
    return this.songsService.updateOne(id, createSongDTO);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.songsService.delete(id);
  }
}
