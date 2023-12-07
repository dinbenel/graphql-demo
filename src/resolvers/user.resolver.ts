import { UserService } from '../services/user.service';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserLoginInput } from '../typeDefs/User/userInput.type';
import { User, UserData } from '../typeDefs/User/user.type';

@Resolver(() => User)
export class UserResolver {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  @Query(() => String)
  async login(@Arg('loginInput') loginInput: UserLoginInput) {
    try {
      return {
        name: '',
      };
    } catch (error) {
      console.log(`cant get user ${error}`);
    }
  }

  @Mutation(() => UserData)
  async register(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('userName') userName: string
  ): Promise<UserData> {
    const userData = await this.userService.create({
      email,
      password,
      userName,
    });
    return userData;
  }
}
