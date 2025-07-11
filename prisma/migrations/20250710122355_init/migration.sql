-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "patente" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "kilometraje" INTEGER NOT NULL,
    "telefono" TEXT NOT NULL,
    "reparado" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_patente_key" ON "Car"("patente");
