import { CreateUserDto } from "./../dtos/create-user.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "src/auth/providers/auth.service";
import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUserParamDto } from "../dtos/get-users-params.dto";
import { User } from "../user.entity";

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async createUser(CreateUserDto: CreateUserDto) {
    //check is user exits with same email
    const existingUser = await this.usersRepository.findOne({
      where: {
        email: CreateUserDto.email,
      },
    });
    //Handle exception
    //create a new user

    let newUser = this.usersRepository.create(CreateUserDto);
    newUser = await this.usersRepository.save(newUser)
    return newUser;
  }

  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      {
        firstName: "john",
        email: "john@doe.com",
      },
      {
        firstName: "alice",
        email: "alice@doe.com",
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id,
      firstName: "alice",
      email: "alice@doe.com",
    };
  }
}
