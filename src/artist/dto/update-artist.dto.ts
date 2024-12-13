import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto } from './create-artist.dto';


export class UpdateArtistDto extends PartialType(CreateArtistDto) {
    id:number
    name?: string;
    grammy?: boolean;
}