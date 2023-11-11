import { UserService } from '../services/user.service';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {
    this.userService = new UserService();
  }
  @Query(() => String)
  async me() {
    return 'hello';
  }
}
