import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    genres: {
      select: {
        id: false,
        name: true,
      },
    },
  };

  create(dto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      ...dto,
      genres: {
        create: dto.genres,
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
    return this.prisma.game.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateGameDto) {
     const data: Prisma.GameUpdateInput = {
      ...dto,
      genres: {
        create: dto.genres,
      },
    };
    return this.prisma.game.update({
      where: { id },
      data,
      include: this._include,
    });
    }
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
