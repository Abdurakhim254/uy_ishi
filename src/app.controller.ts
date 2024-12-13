import { Controller, Delete, Get, Param, Post,Body, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUSerDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllDatas(): Promise<string> {
    return this.appService.getAll();
  }
  @Get(':id')
  getId(@Param('id') id: string): Promise<string> {
    return this.appService.getByid(+id);
  }
  
  @Post()
  getPost(@Body() data: CreateUSerDto): any {
    return this.appService.createData(data)
  }

  @Put(':id')
  getPut(@Body() data:UpdateUserDto,@Param('id') id :number):any{
    data.id=id
    console.log(data)
    return this.appService.updatedata(data)
  }
  @Delete(':id')
  deleteuser(@Param('id') id:string):Promise<string>{
    return this.appService.deletedata(+id)
  }
}
