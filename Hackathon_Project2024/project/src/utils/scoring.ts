import { Student } from '../types';

// Weights for different criteria
const WEIGHTS = {
  academicScore: 0.4,
  hackathonParticipation: 0.25,
  paperPresentations: 0.2,
  teachingAssistance: 0.15,
};

export const calculateOverallScore = (student: Student): number => {
  return (
    student.academicScore * WEIGHTS.academicScore +
    student.hackathonParticipation * WEIGHTS.hackathonParticipation +
    student.paperPresentations * WEIGHTS.paperPresentations +
    student.teachingAssistance * WEIGHTS.teachingAssistance
  );
};

export const getTopPerformers = (students: Student[], count: number = 3): Student[] => {
  return [...students]
    .map(student => ({
      ...student,
      overallScore: calculateOverallScore(student),
    }))
    .sort((a, b) => (b.overallScore || 0) - (a.overallScore || 0))
    .slice(0, count);
};