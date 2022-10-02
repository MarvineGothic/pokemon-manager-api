import { Injectable } from "@nestjs/common";
import { Args, Mutation } from "@nestjs/graphql";
import { Public } from "src/common/decorators/publicRoutes";
import { UserService } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { LoggedUserOutput } from "./auth.type";

@Injectable()
export class AuthResolver {
  constructor(private authService: AuthService,
    private userService: UserService) {}

  @Public()
  @Mutation(() => LoggedUserOutput)
  public async loginUser(@Args('username') username: string, @Args('password') password: string) {
    const user = await this.userService.getUser(username);
    if (user && user.password === password) {
      return this.authService.login(user);
    }
    return null;
  }
}