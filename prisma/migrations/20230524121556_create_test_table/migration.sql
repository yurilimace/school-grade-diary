-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "maxScore" INTEGER NOT NULL,
    "subject" "SchoolSubject" NOT NULL,
    "studentClassId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_studentClassId_fkey" FOREIGN KEY ("studentClassId") REFERENCES "StudendClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
