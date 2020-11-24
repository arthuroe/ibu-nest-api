import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import UserService from './user.service';
import CreateUserDto from './dto/createUser.dto';
import UpdateUserDto from './dto/updateUser.dto';

@Controller('users')
export default class UserController {
  constructor(
    private readonly userService: UserService
  ){}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(Number(id), user);
  }

  @Delete(':id')
  async deleteuser(@Param('id') id: string) {
    this.userService.deleteUser(Number(id));
  }
}
