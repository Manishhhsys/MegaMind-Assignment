-- CreateTable
CREATE TABLE "public"."Profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "pronouns" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "resumeUrl" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "profileid" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CaseStudies" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "profileid" TEXT NOT NULL,

    CONSTRAINT "CaseStudies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_profileid_fkey" FOREIGN KEY ("profileid") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CaseStudies" ADD CONSTRAINT "CaseStudies_profileid_fkey" FOREIGN KEY ("profileid") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
