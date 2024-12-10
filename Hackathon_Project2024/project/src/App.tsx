import React, { useState } from 'react';
import { Medal } from 'lucide-react';
import { Student } from './types';
import { getTopPerformers } from './utils/scoring';
import { BatchLeaderboard } from './components/BatchLeaderboard';

// Mock data for demonstration
const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    batch: '2023',
    academicScore: 95,
    hackathonParticipation: 3,
    paperPresentations: 2,
    teachingAssistance: 4
  },
  {
    id: '2',
    name: 'Bob Smith',
    batch: '2023',
    academicScore: 88,
    hackathonParticipation: 5,
    paperPresentations: 1,
    teachingAssistance: 3
  },
  {
    id: '3',
    name: 'Carol Williams',
    batch: '2023',
    academicScore: 92,
    hackathonParticipation: 4,
    paperPresentations: 3,
    teachingAssistance: 2
  },
  // 2024 Batch
  {
    id: '4',
    name: 'David Brown',
    batch: '2024',
    academicScore: 94,
    hackathonParticipation: 3,
    paperPresentations: 2,
    teachingAssistance: 5
  },
  {
    id: '5',
    name: 'Eva Martinez',
    batch: '2024',
    academicScore: 91,
    hackathonParticipation: 4,
    paperPresentations: 3,
    teachingAssistance: 3
  },
  {
    id: '6',
    name: 'Frank Chen',
    batch: '2024',
    academicScore: 89,
    hackathonParticipation: 5,
    paperPresentations: 2,
    teachingAssistance: 4
  }
];

function App() {
  const [selectedBatch, setSelectedBatch] = useState<string>('2024');
  
  const batches = Array.from(new Set(mockStudents.map(s => s.batch)));
  const filteredStudents = mockStudents.filter(s => s.batch === selectedBatch);
  const topPerformers = getTopPerformers(filteredStudents);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Medal className="w-8 h-8 text-yellow-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Student Recognition System
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Batch
          </label>
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="block w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {batches.map(batch => (
              <option key={batch} value={batch}>
                Batch {batch}
              </option>
            ))}
          </select>
        </div>

        <BatchLeaderboard
          batch={selectedBatch}
          students={topPerformers}
        />
      </main>
    </div>
  );
}

export default App;