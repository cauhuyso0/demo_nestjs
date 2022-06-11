-- CreateTable
CREATE TABLE "Story" (
    "id" SERIAL NOT NULL,
    "mal_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "airing" BOOLEAN NOT NULL,
    "synopsis" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "episodes" DOUBLE PRECISION NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "member" INTEGER NOT NULL,
    "rated" TEXT NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);
