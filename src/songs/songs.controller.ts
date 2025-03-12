import { Controller, Post, Get, Delete, Put } from '@nestjs/common';
import { get } from 'http';

@Controller('songs')
export class SongsController {
  @Post()
  create(): string {
    return 'create Songs';
  }
  @Get()
  findAll() {
    return 'Get All songs';
  }
  @Get(':id')
  findOne() {
    return 'get Song by id';
  }
  @Put(':id')
  update() {
    return 'Update song by id';
  }
  @Delete(':id')
  delete() {
    return 'deletsong by id';
  }
}
