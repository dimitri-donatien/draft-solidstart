-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "name" TEXT,
    "gdp" DOUBLE PRECISION,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);
