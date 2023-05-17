import { PrismaClient } from '@prisma/client';
import { StudentClassRepository } from '../../repositories/studentClass';

export const StudentClassOperations = () => {
  const prisma = new PrismaClient();
  const Repository = StudentClassRepository(prisma);

  const GetAll = async () => {
    const result = Repository.GetAll();
    return result;
  };
  const GetByName = async (name: string) => {
    if (!name) {
      return;
    }
    const result = await Repository.GetByName(name);
    return result;
  };

  const Create = async (name: string) => {
    if (!name) {
      return;
    }
    const result = await Repository.Create(name);
    return result;
  };

  const Update = async (id: string, newName: string) => {
    const result = await Repository.Update(id, newName);
    return result;
  };

  return {
    GetAll,
    GetByName,
    Create,
    Update,
  };
};
