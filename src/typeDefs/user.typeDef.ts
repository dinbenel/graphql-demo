import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class User {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}

export default User;
