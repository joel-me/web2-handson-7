import { Injectable } from '@nestjs/common';
import { Song } from './song.entity';
import { CreatSongDTO } from './create-song.dto';

@Injectable()
export class SongsService {
  private currentId = 0;
  private songs: Song[] = [];

  create(createSongDTO: CreatSongDTO): Song {
    const song: Song = {
      id: this.currentId,
      title: createSongDTO.title,
      artist: createSongDTO.artist,
    };

    this.songs.push(song);
    this.currentId++;

    return song;
  }

  findAll(): Song[] {
    return this.songs;
  }

  findOne(id: number): Song | undefined {
    return this.songs.find((song) => song.id === id);
  }

  delete(id: number): void {
    this.songs = this.songs.filter((song) => song.id !== id);
  }

  updateOne(id: number, createSongDTO: CreatSongDTO): Song | undefined {
    const song = this.songs.find((song) => song.id === id);
    if (song) {
      song.artist = createSongDTO.artist;
      song.title = createSongDTO.title;
    }
    return song;
  }
}
