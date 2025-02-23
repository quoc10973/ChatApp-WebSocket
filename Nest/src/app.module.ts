import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'ChatApp',
      autoLoadEntities: true,
      synchronize: true, // For development only
    }),
    ChatModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
