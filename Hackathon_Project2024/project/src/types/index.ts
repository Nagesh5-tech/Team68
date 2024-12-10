export interface Student {
  id: string;
  name: string;
  batch: string;
  academicScore: number;
  hackathonParticipation: number;
  paperPresentations: number;
  teachingAssistance: number;
  overallScore?: number;
}

export interface BatchStats {
  batchId: string;
  totalStudents: number;
  averageScore: number;
  topPerformers: Student[];
}