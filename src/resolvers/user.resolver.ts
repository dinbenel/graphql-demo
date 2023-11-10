import { UserService } from '../services/user.service';
import { Query, Resolver } from 'type-graphql';

const userService = new UserService();

@Resolver()
export class UserResolver {
  @Query(() => String)
  async me() {
    const user = await userService.create();
    console.log(user);
    return 'hello';
  }
}
