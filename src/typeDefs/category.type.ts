import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Category {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;
}
