// UI Components
function createStudentCard(student, rank) {
    const card = document.createElement('div');
    card.className = `student-card ${rank <= 3 ? `top-${rank}` : ''}`;
    
    const rankBadge = document.createElement('div');
    rankBadge.className = 'rank-badge';
    rankBadge.textContent = `#${rank}`;
    
    card.innerHTML = `
        <div class="student-header">
            <div class="student-avatar">${student.name.charAt(0)}</div>
            <div class="student-info">
                <h3>${student.name}</h3>
                <p>Batch ${student.batch}</p>
            </div>
        </div>
        <div class="student-scores">
            <div class="score-item">
                <span class="icon">📚</span>
                <span>Academic: ${student.academicScore}</span>
            </div>
            <div class="score-item">
                <span class="icon">💻</span>
                <span>Hackathons: ${student.hackathonParticipation}</span>
            </div>
            <div class="score-item">
                <span class="icon">📝</span>
                <span>Papers: ${student.paperPresentations}</span>
            </div>
            <div class="score-item">
                <span class="icon">👨‍🏫</span>
                <span>Teaching: ${student.teachingAssistance}</span>
            </div>
        </div>
        <div class="overall-score">
            <span>Overall Score:</span>
            <span class="score-value">${student.overallScore.toFixed(2)}</span>
        </div>
    `;
    
    card.appendChild(rankBadge);
    return card;
}

function updateBatchStats(stats) {
    const statsContainer = document.getElementById('batchStats');
    statsContainer.innerHTML = `
        <div class="stat-card">
            <h3>Total Students</h3>
            <div class="stat-value">${stats.totalStudents}</div>
        </div>
        <div class="stat-card">
            <h3>Average Score</h3>
            <div class="stat-value">${stats.averageScore.toFixed(2)}</div>
        </div>
    `;
}