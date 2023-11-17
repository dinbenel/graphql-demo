import { UserService } from '../services/user.service';
import { Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../typeDefs/user.type';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {
    this.userService = new UserService();
  }
  @Query(() => String)
  async me() {
    return 'hello';
  }

  @Mutation(() => User)
  async register() {
    try {
    } catch (error) {
      console.log(`cant create user ${error}`);
    }
  }
}
