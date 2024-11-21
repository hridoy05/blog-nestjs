import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    //Find A User
    return [
      {
        user,
        title: "Test title blog",
        content: "Test content",
      },
      {
        user,
        title: "Test title blog 2",
        content: "Test content 2",
      },
    ];
  }
}
