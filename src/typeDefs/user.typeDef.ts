import { Field } from 'type-graphql';

class User {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}

export default User;
