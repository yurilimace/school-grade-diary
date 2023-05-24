-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "studentClassId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_key" ON "Student"("id");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_studentClassId_fkey" FOREIGN KEY ("studentClassId") REFERENCES "StudendClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
