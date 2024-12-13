import { PartialType } from '@nestjs/mapped-types';
import { CreateUSerDto } from './create-user.dto';


export class UpdateUserDto extends PartialType(CreateUSerDto) {
    name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    age?: number;
    id:number
}