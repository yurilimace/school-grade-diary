import { PrismaClient } from '@prisma/client';
import { Test } from '../../types';

export const TestRepository = (prisma: PrismaClient) => {
  const GetAll = async () => {
    const result = await prisma.test.findMany();
    return result;
  };

  const Create = async (test: Test) => {
    console.log(test);
    const result = await prisma.test.create({ data: test });
    return result;
  };

  const Update = async (test: Test) => {
    const result = await prisma.test.update({
      where: { id: test.id },
      data: test,
    });
    return result;
  };

  const Delete = async (testId: string) => {
    const result = await prisma.test.delete({
      where: { id: testId },
    });
    return result;
  };

  return {
    GetAll,
    Delete,
    Update,
    Create,
  };
};
