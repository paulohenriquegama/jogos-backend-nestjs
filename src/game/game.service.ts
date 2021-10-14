import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.GameInclude = {
    genres: true,
    users: true,
  };

  create(dto: CreateGameDto) {
    const genresIds = dto.genresIds;
    delete dto.genresIds;

    const usersIds = dto.usersIds;
    delete dto.usersIds;

    const data: Prisma.GameCreateInput = {
      ...dto,
      genres: {
        connect: genresIds.map((genreId) => ({ id: genreId })),
      },
      users: {
        connect: usersIds?.map((userId) => ({ id: userId })) || [],
      },
    };
    return this.prisma.game.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.game.findMany({ include: this._include });
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, dto: UpdateGameDto) {
    const genresIds = dto.genresIds;
    delete dto.genresIds;

    const usersIds = dto.usersIds;
    delete dto.genresIds;

    const data: Prisma.GameUpdateInput = {
      ...dto,
      genres: {
        connect: genresIds?.map((genresId) => ({ id: genresId })),
      },
      users: {
        connect: usersIds?.map((userId) => ({ id: userId })),
      },
    };
    return this.prisma.game.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
