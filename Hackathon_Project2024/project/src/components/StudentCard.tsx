import React from 'react';
import { Trophy, Award, BookOpen, Code } from 'lucide-react';
import { Student } from '../types';

interface StudentCardProps {
  student: Student;
  rank?: number;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, rank }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      {rank && (
        <div className="absolute -top-3 -right-3 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-white font-bold">#{rank}</span>
        </div>
      )}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-600">
            {student.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{student.name}</h3>
          <p className="text-gray-600">Batch: {student.batch}</p>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-500" />
          <span>Academic: {student.academicScore}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Code className="w-5 h-5 text-green-500" />
          <span>Hackathons: {student.hackathonParticipation}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span>Papers: {student.paperPresentations}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-purple-500" />
          <span>Teaching: {student.teachingAssistance}</span>
        </div>
      </div>
      
      {student.overallScore && (
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Overall Score:</span>
            <span className="text-lg font-bold text-blue-600">
              {student.overallScore.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};