import { PrismaClient } from '@prisma/client';
import { StudentScore } from '../../types';

export const StudentScoreRepository = (prisma: PrismaClient) => {
  const Create = async (studentScore: StudentScore) => {
    const result = await prisma.studentScore.create({ data: studentScore });
    return result;
  };

  const Update = async (studentScore: StudentScore) => {
    const result = await prisma.studentScore.update({
      where: { id: studentScore.id },
      data: studentScore,
    });
    return result;
  };

  const Delete = async (studentScoreId: string) => {
    const result = await prisma.studentScore.delete({
      where: { id: studentScoreId },
    });
    return result;
  };

  const FindById = async (studentId: string) => {
    const result = await prisma.studentScore.findMany({
      where: { studentId: studentId },
    });
    return result;
  };

  return {
    Create,
    Update,
    Delete,
    FindById,
  };
};
