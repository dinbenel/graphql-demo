import { UserService } from '../services/user.service';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserInput, UserLoginInput } from '../typeDefs/User/userInput.type';
import { User } from '../typeDefs/User/user.type';

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

  @Mutation(() => User)
  async register(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('userName') userName: string
  ): Promise<Partial<User> | undefined> {
    console.log('first');
    console.log({ email, userName, password });
    try {
      const user = await this.userService.create({ email, password, userName });
      if (user) {
        return {
          email: user.emailAddresses[0].emailAddress,
          id: user.id,
        };
      }
    } catch (error) {
      console.log(`cant create user ${error}`);
    }
  }
}
