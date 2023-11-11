import DBClient from '../lib/db.client';

const prisma = DBClient.getInstance().prisma;

export class ProductService {
  async create() {
    try {
      //   const user = await prisma.product.create();
      return;
    } catch (error) {
      console.log(`cant create product ${error}`);
    }
  }

  getAll() {
    return prisma.product.findMany({
      include: {
        category: true,
      },
    });
  }
}
