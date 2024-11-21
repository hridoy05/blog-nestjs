import { Controller, Get, Param } from "@nestjs/common";
import { PostsService } from "./providers/posts.service";

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   *  GeT localhost:3000/posts/:userId
   */

  @Get()
  public getPosts(@Param("userID") userId: string) {}
}
