import { PrismaService } from '../prisma_service/prisma.service';
import { Module } from '@nestjs/common';
import { UserControllerController } from './user_controller/user_controller.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UserControllerController],
})
export class UserModule {}
