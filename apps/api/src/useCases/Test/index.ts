import { PrismaClient, Test } from '@prisma/client';
import { TestRepository } from '../../repositories/Test';

export const TestUseCases = () => {
  const prisma = new PrismaClient();
  const TestRepositoryMethods = TestRepository(prisma);

  const ListAllTests = async () => {
    const result = await TestRepositoryMethods.GetAll();
    return result;
  };

  const Update = async (test: Test) => {
    const result = await TestRepositoryMethods.Update(test);
    return result;
  };

  const Delete = async (testId: string) => {
    const result = await TestRepositoryMethods.Delete(testId);
    return result;
  };

  const Create = async (test: Test) => {
    const result = await TestRepositoryMethods.Create(test);
    return result;
  };

  return {
    ListAllTests,
    Update,
    Delete,
    Create,
  };
};
