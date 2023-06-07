import { PrismaClient } from '@prisma/client';

export const StudentClassRepository = (prisma: PrismaClient) => {
  const GetAll = async () => {
    const result = await prisma.studentClass.findMany({
      include: { students: true },
    });

    return result;
  };

  const GetByName = async (name: string) => {
    const result = await prisma.studentClass.findFirst({
      where: {
        name: name,
      },
    });
    return result;
  };

  const Update = async (id: string, newName: string) => {
    const result = await prisma.studentClass.update({
      where: { id: id },
      data: { name: newName },
    });
    return result;
  };

  const Create = async (name: string) => {
    const result = await prisma.studentClass.create({ data: { name: name } });
    return result;
  };

  return {
    GetAll,
    GetByName,
    Create,
    Update,
  };
};
