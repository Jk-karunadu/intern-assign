import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // or your database host
      port: 5432,
      username: 'postgres', // replace with your PostgreSQL username
      password: 'jk@karunadu01', // replace with your PostgreSQL password
      database: 'simple_api', // replace with your PostgreSQL database name
      synchronize: false,
      logging: false,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [User],
      migrations: ["src/migrations/*.ts"], // Path to migration files
      //synchronize: true, // Set to false in production
    }),
    UsersModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
