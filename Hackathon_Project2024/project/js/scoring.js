// Scoring logic
const WEIGHTS = {
    academicScore: 0.4,
    hackathonParticipation: 0.25,
    paperPresentations: 0.2,
    teachingAssistance: 0.15
};

function calculateOverallScore(student) {
    return (
        student.academicScore * WEIGHTS.academicScore +
        student.hackathonParticipation * WEIGHTS.hackathonParticipation +
        student.paperPresentations * WEIGHTS.paperPresentations +
        student.teachingAssistance * WEIGHTS.teachingAssistance
    );
}

function getTopPerformers(students, count = 3) {
    return [...students]
        .map(student => {
            student.overallScore = calculateOverallScore(student);
            return student;
        })
        .sort((a, b) => b.overallScore - a.overallScore)
        .slice(0, count);
}