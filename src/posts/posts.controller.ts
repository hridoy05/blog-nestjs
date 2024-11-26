import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PostsService } from "./providers/posts.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePostDto } from "./dtos/create-post.dto";

@Controller()
@ApiTags("Posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public getPosts(@Param("userID") userId: string) {
    return userId;
  }
  @ApiOperation({
    summary: "Creates a new post for the blog.",
  })
  @ApiResponse({
    status: 201,
    description:
      "You get a success 201 response if the post is created successfully",
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }
}
