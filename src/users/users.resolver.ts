import { Resolver, Query } from "@nestjs/graphql";
import { CurrentUser } from "src/common/decorators/currentUser";
import { UserService } from "./users.service";
import { User } from "./users.type";

@Resolver(User)
export class UserResolver {
  constructor(
    private userService: UserService,
  ) { }

  @Query(() => Promise<User>)
  public async whoAmI(@CurrentUser() user: User) {
    return this.userService.getUser(user.username);
  }
}