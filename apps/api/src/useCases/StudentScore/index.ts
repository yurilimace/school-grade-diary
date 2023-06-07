import { PrismaClient } from '@prisma/client';
import { StudentScore } from '../../types';
import { StudentScoreRepository } from '../../repositories/StudentScore';

export const StudentScoreUseCases = () => {
  const prisma = new PrismaClient();

  const repository = StudentScoreRepository(prisma);
  const Create = async (studentScore: StudentScore) => {
    const response = await repository.Create(studentScore);
    return response;
  };
  const Update = async (studentScore: StudentScore) => {
    const response = await repository.Update(studentScore);
    return response;
  };

  const Delete = async (studentScoreId: string) => {
    const response = await repository.Delete(studentScoreId);
    return response;
  };

  const FindById = async (studentScoreId: string) => {
    const response = await repository.FindById(studentScoreId);
    return response;
  };

  return {
    Create,
    Update,
    Delete,
    FindById,
  };
};
