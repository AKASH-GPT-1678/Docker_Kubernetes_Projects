-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "complaint" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "urgency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateOfRegister" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
