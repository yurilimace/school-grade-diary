import { PrismaClient } from '@prisma/client';
import { StudentRepository } from '../../repositories/Student';
import { Student } from '../../types';

export const StudentUseCases = () => {
  const prisma = new PrismaClient();
  const useCases = StudentRepository(prisma);

  const ListAll = async () => {
    const response = await useCases.GetAll();
    return response;
  };

  const FindByName = async (name: string) => {
    const response = await useCases.FindByName(name);
    return response;
  };

  const Update = async (student: Student) => {
    if (student.id) {
      const response = await useCases.Update(student);
      return response;
    }
    return;
  };

  const Create = async (student: Student) => {
    const response = await useCases.Create(student);
    return response;
  };

  const Delete = async (student: Student) => {
    const response = await useCases.Delete(student);
    return response;
  };

  return {
    ListAll,
    FindByName,
    Create,
    Update,
    Delete,
  };
};
