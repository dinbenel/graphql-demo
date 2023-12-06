import { Field, ID, ObjectType } from 'type-graphql';
import { User as IUser } from '@prisma/client';
import { Profile } from './profile.type';

@ObjectType()
export class User implements IUser {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;

  @Field(() => String)
  userName: string;

  @Field(() => Profile, { nullable: true })
  profile: typeof Profile;
}
