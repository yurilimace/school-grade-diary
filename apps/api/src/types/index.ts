import { SchoolSubject } from '@prisma/client';

export type Student = {
  id?: string;
  name: string;
  age: number;
  studentClassId: string;
};
export type Test = {
  id?: string;
  title: string;
  description?: string;
  maxScore: number;
  subject: SchoolSubject;
  studentClassId: string;
};

export type StudentScore = {
  id?: string;
  studentId: string;
  testId: string;
  score: number;
};
