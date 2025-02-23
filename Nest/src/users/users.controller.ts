import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginRequestDto } from './loginRequest.dto';
import { RegisterRequestDto } from './registerRequest.dto';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post('login')
    async login(@Body() loginRequest: LoginRequestDto) {
        try {
            return await this.userService.login(loginRequest);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Post('register')
    async register(@Body() registerRequest: RegisterRequestDto) {
        return await this.userService.register(registerRequest);
    }
}
