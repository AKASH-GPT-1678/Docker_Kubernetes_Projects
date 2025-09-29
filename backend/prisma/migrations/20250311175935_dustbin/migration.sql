-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Low', 'LowAbove', 'Middle', 'MiddleAbove', 'Full', 'Overflow');

-- CreateTable
CREATE TABLE "Dustbin" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "filllevel" "Level" NOT NULL,
    "last_collect" TEXT NOT NULL,
    "latitude" TEXT,
    "longitude" TEXT,

    CONSTRAINT "Dustbin_pkey" PRIMARY KEY ("id")
);
