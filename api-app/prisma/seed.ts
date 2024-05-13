import { PrismaClient } from "@prisma/client";
import { dataProducts, imageData } from "./data"
import *  as bcrypt from 'bcrypt';


const prisma = new PrismaClient();

async function main() {
    
    const salt = await bcrypt.genSalt();
    const user1 = await prisma.user.create({
      data: {
        email: 'ghofrane.cherni99@gmail.com',
        fullName: 'ghofrane',
        password: await bcrypt.hash('cherni', salt),
       
      },
      
    });
    
    console.log('seeded')


   
    const products = await prisma.product.createMany({
        data:dataProducts
      })
      
    console.log('seeded')
    
    const filteredImages = imageData.filter(image => image !== undefined)
    const images=await prisma.image.createMany({
      data:filteredImages
    })
}


main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {

        await prisma.$disconnect();
    });
