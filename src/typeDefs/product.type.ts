import { Field, FieldResolver, ObjectType, Root } from 'type-graphql';
import { Category } from './category.type';

@ObjectType()
export class Product {
  @Field(() => String)
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
