import { PrismaClient } from '@prisma/client';
import { Student } from '../../types';

export const StudentRepository = (prisma: PrismaClient) => {
  const GetAll = async () => {
    const result = await prisma.student.findMany();
    return result;
  };

  const FindByName = async (name: string) => {
    const result = await prisma.student.findMany({
      where: { name: name },
    });
    return result;
  };

  const Create = async (student: Student) => {
    const result = await prisma.student.create({ data: student });
    return result;
  };

  const Update = async (student: Student) => {
    const result = await prisma.student.update({
      where: { id: student.id },
      data: student,
    });
    return result;
  };

  const Delete = async (student: Student) => {
    const result = await prisma.student.delete({ where: { id: student.id } });
    return result;
  };

  return {
    GetAll,
    Create,
    Update,
    Delete,
    FindByName,
  };
};
