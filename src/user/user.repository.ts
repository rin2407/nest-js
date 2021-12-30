import { BadRequestException, HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{
  async getDataAndCount(){
      const result = await this.findAndCount()
      return result
  }
  async createUser(user: CreateUserDto){
    const userCreate = await this.save({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email
      })
      return userCreate
  }
  async findUser(id: number){
      const user = await this.findOne(id)
      return user
  }
  async updateUser(updateDto: UpdateUserDto){
     try {
      let user = await this.findOneOrFail(updateDto?.id)
      if(user){
        user.firstName = updateDto?.firstName
        user.lastName = updateDto?.lastName
        const saveUser = await this.save(user)
        return saveUser
      }
     } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND)
    }
  }
}
