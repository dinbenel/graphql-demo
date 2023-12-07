import { Field, ID, ObjectType } from 'type-graphql';
import { Category } from './category.type';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  discountPercentage: number;

  @Field(() => Number)
  rating: number;

  @Field(() => Number)
  stock: number;

  @Field(() => String)
  brand: string;

  @Field(() => String)
  thumbnail: string;

  @Field(() => [String])
  images: string[];

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;

  @Field(() => Category)
  category: Category;
}
