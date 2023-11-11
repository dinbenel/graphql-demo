import { Product } from '../typeDefs/product.typeDef';
import { ProductService } from '../services/product.service';
import { FieldResolver, Query, Resolver, Root } from 'type-graphql';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {
    this.productService = new ProductService();
  }

  @FieldResolver()
  category(@Root() product: Product) {
    return product.category;
  }

  @Query(() => [Product])
  async products() {
    try {
      const products = await this.productService.getAll();
      return products;
    } catch (error) {
      console.log(`cant get products ${error}`);
    }
  }
}
