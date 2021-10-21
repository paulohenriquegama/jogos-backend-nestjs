import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './model/LoginDto';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './model/UserPayload';
import { UserToken } from './model/UserToken';
import { UnauthorizedError } from 'src/errors/unauthorized.error';
// import { UnauthorizedError } from 'src/errors/unauthorized.error';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<UserToken> {
    const user: User = await this.validateUser(dto.email, dto.password);

    const payload: UserPayload = {
      sub: user.id,
      username: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    // Buscamos o user pelo e-mail
    const user: User = await this.userService.findByEmail(email);

    // Caso user esteja no banco, valido se a senha informada foi correta
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Se a senha for válida, retornamos o objeto do usuário, sem senha

        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new UnauthorizedError('Senha ou E-mail inválido');
  }
}
