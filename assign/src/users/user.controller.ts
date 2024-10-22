// import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { User } from '../entities/user.entity';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post()
//   create(@Body() user: User) {
//     return this.usersService.create(user);
//   }

//   @Get()
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number) {
//     return this.usersService.findOne(id);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: number) {
//     return this.usersService.remove(id);
//   }
// }


// src/users/users.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe,UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

import { JwtAuthGuard } from '../auth/jwt.gaurd';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()

  @UsePipes(new ValidationPipe())
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }


  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')

  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')

  update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')

  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
