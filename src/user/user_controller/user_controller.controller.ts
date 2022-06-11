import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../user.service';
import { User as UserModel } from '@prisma/client';
import { UpdateUser } from '../dto/update_user.dto';

@Controller('user')
export class UserControllerController {
  constructor(private readonly service: UserService) {}

  @Post()
  async createUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.service.createUser(userData);
  }

  @Get()
  async getUser() {
    return this.service.getUser();
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUser,
  ) {
    return this.service.updateUSer(id, updateUserDto);
  }
}
