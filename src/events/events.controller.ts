import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from 'src/auth/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';

@UseGuards(AuthGuard)
@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private userService: UsersService,
    private prismaService: PrismaService,
  ) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto, @Req() req: any) {
    const user = await this.userService.findOne(req.user.id); 
    if(!user){
      throw new Error('User not found');
    }
    const partnerUser = await this.prismaService.partnerUser.findOne({
      where: {
        userId: user.id
      }
    })
    return this.eventsService.create(partnerUser.partnerId);
  }

  // @Get()
  // findAll() {
  //   return this.eventsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.eventsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
  //   return this.eventsService.update(+id, updateEventDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.eventsService.remove(+id);
  // }
}
