import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Body,
  Patch,
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-users-params.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UsersService } from "./providers/users.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller("users")
@ApiTags("Users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("/:id?")
  @ApiOperation({
    summary: "It fetches a list of registered users",
  })
  @ApiResponse({
    status: 200,
    description: "user fetched successfully",
  })
  @ApiQuery({
    name: "limit",
    type: "number",
    required: false,
    description: "Number of entries returned per query",
    example: 10,
  })
  @ApiQuery({
    name: "page",
    type: "number",
    required: false,
    description: "The position of the page number that you want API to return",
    example: 1,
  })
  public getUsers(
    @Param() getUserParamDto: GetUserParamDto,
    @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
