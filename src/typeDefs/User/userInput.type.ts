import { ArgsType, Field, InputType } from 'type-graphql';
import { IsEmail, IsNotEmpty, Min } from 'class-validator';
import { errorMsg } from '../../constants/errorMessages';
import { User } from './user.type';

@InputType()
export class UserInput {
  @Field({ nullable: true })
  email: string;

  @Field()
  password: string;

  @Field()
  userName: string;
}

@InputType()
export class UserLoginInput {
  @Field()
  @IsEmail()
  @IsNotEmpty({
    message: errorMsg.require,
  })
  email: string;

  @Field()
  @IsNotEmpty()
  @Min(8, {
    message: errorMsg.min,
  })
  password: string;
}
