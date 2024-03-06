import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function getCourses(select: Prisma.CourseSelect) {
  return prisma.course.findMany({ select });
}

export async function getCourseBySlug(
  slug: string,
  select: Prisma.CourseSelect,
) {
  await sleep(3000);
  return prisma.course.findUniqueOrThrow({
    where: { slug },
    select,
  });
}

export async function createCourse(course: Prisma.CourseCreateInput) {
  await prisma.course.create({ data: course });
}

export async function updateCourse(
  id: string,
  update: Prisma.CourseUpdateInput,
) {
  await prisma.course.update({ where: { id }, data: update });
}

export async function deleteCourse(id: string) {
  await prisma.course.delete({ where: { id } });
}
