import { Field, ObjectType } from 'type-graphql';
import { $Enums } from '@prisma/client';
@ObjectType()
export class Profile {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  avatar: string | null;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String, { nullable: true })
  lastName: string | null;

  @Field(() => String, { nullable: true })
  name: string | null;

  @Field(() => String, { nullable: true })
  password: string | null;

  @Field(() => String)
  provider: $Enums.EProviders;

  @Field(() => String)
  updatedAt: Date;
}
