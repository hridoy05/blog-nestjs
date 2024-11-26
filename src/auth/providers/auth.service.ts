import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersSevice: UsersService
  ) {}
  public login(email: string, password: string) {
    //check user exits database
    const user = this.usersSevice.findOneById("1234");
    //login
    return "SAMPLE_TOKEN";
  }

  public isAuth() {
    return true;
  }
}
