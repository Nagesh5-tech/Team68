// Type definitions
class Student {
    constructor(id, name, batch, academicScore, hackathonParticipation, paperPresentations, teachingAssistance) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.academicScore = academicScore;
        this.hackathonParticipation = hackathonParticipation;
        this.paperPresentations = paperPresentations;
        this.teachingAssistance = teachingAssistance;
        this.overallScore = null;
    }
}

class BatchStats {
    constructor(batchId, totalStudents, averageScore, topPerformers) {
        this.batchId = batchId;
        this.totalStudents = totalStudents;
        this.averageScore = averageScore;
        this.topPerformers = topPerformers;
    }
}