import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'generated/prisma';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: 
        createUserDto
      // {
      //   email: "Seconduser@gmail.com",
      //   name: "Tail block"
      // } as User
    });
  }

  findAll() {
    return this.prisma.user.findMany({include: { resumes: true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
