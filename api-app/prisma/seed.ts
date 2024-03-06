import { PrismaClient } from "@prisma/client";
import { dataProducts } from "../data/data";

const prisma = new PrismaClient();

async function main() {
    const products = await prisma.product.createMany({
        data:dataProducts
    })
      
    console.log('seeded')
}


main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {

        await prisma.$disconnect();
    });
