import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from '../functions';
export type user={
  id?:Number
  name:String,
  last_name:String,
  age:Number,
  email:String,
  password:String
}

@Injectable()
export class AppService {
  async getAll(): Promise<string> {
    return await readFile();
  }
   async getByid(id: number): Promise<string> {
    const result=await readFile()
    const data=result.filter((item)=>item.id==id)
    return data
  }

  async createData(data:user):Promise<string> {
    const result=await readFile()
    const id=result.length+1
    data.id=id
    result.push(data)
    return await writeFile(result)
  }

  async updatedata(data:user):Promise<string>{
    const result=await readFile()
    for(let i=0;i<result.length;i++){
      if(result[i].id==data.id){
        result[i].name=data.name
        result[i].age=data.age
        result[i].last_name=data.last_name
        result[i].email=data.email
        result[i].password=data.password
      }
    }
    await writeFile(result)
    return "Malumot yangilandi"
  }

  async deletedata(id:number):Promise<string>{
    const result=await readFile()
    const data=result.filter((item)=>item.id!==id)
    await writeFile(data)
    return "Ma'lumot o'chirildi"
  }
}
