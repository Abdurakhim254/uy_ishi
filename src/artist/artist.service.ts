import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { readFile, writeFile } from '../../artist.functions';

export type artist1={
  id?:Number
  name:String,
  grammy:boolean
}

export type artist2={
  id?:Number
  name?:String,
  grammy?:boolean
}

@Injectable()
export class ArtistService {
  async create(createArtistDto: artist1):Promise<string> {
    const result=await readFile()
    const id=result.length+1
    createArtistDto.id=id
    result.push(createArtistDto)
    return await writeFile(result)
  }

  async findAll():Promise<string> {
    return await readFile();
  }

  async findOne(id: number):Promise<string> {
    const result=await readFile()
    const data=result.filter((item)=>item.id==id)
    return data
  }

  async update(id: number, updateArtistDto: artist2) :Promise<string>{
    const result=await readFile()
    for(let i=0;i<result.length;i++){
      if(result[i].id==id){
        result[i].name=updateArtistDto.name
        result[i].age=updateArtistDto.grammy
      }
    }
    await writeFile(result)
    return "Malumot yangilandi"
  }

 async remove(id: number) :Promise<string>{
  const result=await readFile()
  const data=result.filter((item)=>item.id!==id)
  await writeFile(data)
  return "Ma'lumot o'chirildi"
  }
}
