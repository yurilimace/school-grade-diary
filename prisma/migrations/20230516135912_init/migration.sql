-- CreateTable
CREATE TABLE "StudendClasss" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "StudendClasss_id_key" ON "StudendClasss"("id");
