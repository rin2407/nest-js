import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository){
  }
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.createUser(createUserDto)
    return user
  }
  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user =  this.userRepository.findUser(id)
    return user
  }

  async update(id: number,updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.updateUser(updateUserDto)
    return user
  }

  async remove(id: number) {
    return await this.userRepository.delete({id: id});
  }
}
