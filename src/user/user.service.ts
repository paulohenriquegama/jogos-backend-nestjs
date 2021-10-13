import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  findMany: any;
  constructor(private readonly prisma: PrismaService) {}

  private readonly _includes = {
    profiles: {
      select: {
        title: true,
        image: true,
      },
    },
    games: true,
  };

  create(dto: CreateUserDto) {
    const gamesIds = dto.gamesIds;
    delete dto.gamesIds;

    const profilesIds = dto.profilesIds;
    delete dto.profilesIds;

    const data: Prisma.UserCreateInput = {
      ...dto,
      profiles: {
        connect: profilesIds?.map((profileId) => ({ id: profileId })),
      },
      games: {
        connect: gamesIds?.map((gameId) => ({ id: gameId })),
      },
    };

    return this.prisma.user.create({
      data,
      include: this._includes,
    });
  }

  findAll() {
    return this.prisma.user.findMany({ include: this._includes });
  }

  // findGames() {
  //   return this.prisma.user.findMany({
  //     where: { profiles: { some: {} } },
  //   });
  // }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateUserDto) {
    const gamesIds = dto.gamesIds;
    delete dto.gamesIds;

    const profilesIds = dto.profilesIds;
    delete dto.profilesIds;

    const data: Prisma.UserUpdateInput = {
      ...dto,
      profiles: {
        connect: profilesIds?.map((profileId) => ({ id: profileId })) || [],
      },
      games: {
        connect: gamesIds?.map((gameId) => ({ id: gameId })) || [],
      },
    };

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
