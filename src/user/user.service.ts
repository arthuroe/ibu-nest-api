import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';

@Injectable()
export default class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne(id);
    return user;
  }

  async createuser(user: CreateUserDto) {
    const newUser = await this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return user;
  }
}
