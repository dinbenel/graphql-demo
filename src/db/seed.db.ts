import axios from 'axios';
import DBClient from '../lib/db.client';

const prisma = DBClient.getInstance().prisma;

export const seedProduct = async () => {
  const { data } = await axios.get<{
    products: IProduct[];
  }>('https://dummyjson.com/products');
  try {
    const res = data.products.map((p) => {
      return prisma.product.create({
        data: {
          brand: p.brand,
          description: p.description,
          discountPercentage: p.discountPercentage,
          price: p.price,
          rating: p.rating,
          stock: p.stock,
          thumbnail: p.thumbnail,
          title: p.title,
          images: p.images,
          Category: {
            connectOrCreate: {
              create: {
                name: p.category,
              },
              where: {
                name: p.category,
              },
            },
          },
        },
      });
    });
    const dbRes = await Promise.all(res);
    console.log(dbRes);
  } catch (error) {
    console.log(error);
  }
};
