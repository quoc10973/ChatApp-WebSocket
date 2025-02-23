import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { LoginRequestDto } from './loginRequest.dto';
import { RegisterRequestDto } from './registerRequest.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    async login(loginRequest: LoginRequestDto) {
        const user = await this.userRepository.findOne({
            where: {
                userName: loginRequest.userName,
                password: loginRequest.password
            }
        });
        if (!user) {
            throw new Error('Invalid username or password');
        }
        return user;
    }

    async register(registerRequest: RegisterRequestDto) {
        return await this.userRepository.save(registerRequest);
    }
}
