import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function initializeDB() {
  await prisma.countries.deleteMany({});
  await prisma.countries.createMany({
    data: [
      {
        name: "France",
        gdp: 23,
      },
      {
        name: "Mexique",
        gdp: 13,
      },
      {
        name: "Inde",
        gdp: 123,
      },
      {
        name: "Tchad",
        gdp: 8,
      },
      {
        name: "Australie",
        gdp: 19,
      },
    ],
  });
}
initializeDB();
