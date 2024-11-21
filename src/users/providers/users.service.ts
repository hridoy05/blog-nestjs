import { Injectable } from "@nestjs/common";
import { GetUserParamDto } from "../dtos/get-users-params.dto";

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
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
