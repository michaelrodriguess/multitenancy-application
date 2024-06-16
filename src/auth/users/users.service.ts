import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto'
import { UserRoles } from './user-roles'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) {}

    createPartnerUser(data: CreateUserDto){
       return this.prismaService.user.create({
            data: {
                ...data,
                passwd: this.generateHash(data.passwd),
                roles: [UserRoles.PARTNER]
            },
        })
    }

    createCommonUser(data: CreateUserDto){
        return this.prismaService.user.create({
             data: {
                 ...data,
                 passwd: this.generateHash(data.passwd),
                 roles: [UserRoles.USER]
             },
         })
     }

    generateHash(password: string){
        return bcrypt.hashSync(password, 10);
    }

    findOne(idOrEmail: number | string) {
        return this.prismaService.user.findFirst({
            where: {
                ...(typeof idOrEmail === 'number'
                ? { id: idOrEmail } 
                : { email: idOrEmail }),
            }
        })
    }
}