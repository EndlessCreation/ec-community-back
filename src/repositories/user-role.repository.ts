import { Injectable } from '@nestjs/common';
import { Prisma, UserRole } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRoleRepository {
  constructor(private prisma: PrismaService) {}

  async findLimitOne(userRoleUnique: Prisma.UserRoleWhereInput): Promise<UserRole[]> {
    return this.prisma.userRole.findMany({ where: userRoleUnique, take: 1 });
  }
}
