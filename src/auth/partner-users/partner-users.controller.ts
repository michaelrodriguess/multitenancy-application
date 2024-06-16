import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { PartnerUserPresenter } from './partner-user-presenter';

@Controller('partners/users')
export class PartnerUsersController {
    constructor(private usersService: UsersService){}

    @Post()
    async create(@Body() data: CreateUserDto){
      const user = await this.usersService.createPartnerUser(data);
      return new PartnerUserPresenter(user);
    }
}
