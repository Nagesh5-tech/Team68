import React from 'react';
import { Student } from '../types';
import { StudentCard } from './StudentCard';

interface BatchLeaderboardProps {
  batch: string;
  students: Student[];
}

export const BatchLeaderboard: React.FC<BatchLeaderboardProps> = ({ batch, students }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Batch {batch} Top Performers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <div key={student.id} className="relative">
            <StudentCard student={student} rank={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};