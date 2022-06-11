import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma_service/prisma.service';
import { User, Prisma } from '@prisma/client';
import { UpdateUser } from './dto/update_user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async getUser() {
    return this.prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  }

  async updateUSer(id, updateUserDto: UpdateUser) {
    try {
      const result = await this.prisma.user.update({
        where: { id: id },
        data: {
          email: updateUserDto.email,
          name: updateUserDto.name,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
