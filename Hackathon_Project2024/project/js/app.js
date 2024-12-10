// Main application logic
document.addEventListener('DOMContentLoaded', async () => {
    const batchSelect = document.getElementById('batchSelect');
    const topPerformersContainer = document.getElementById('topPerformers');

    async function updateDisplay(batch) {
        try {
            const stats = await StudentAPI.getBatchStats(batch);
            const topPerformers = stats.topPerformers;

            // Update top performers
            topPerformersContainer.innerHTML = '';
            topPerformers.forEach((student, index) => {
                const card = createStudentCard(student, index + 1);
                topPerformersContainer.appendChild(card);
            });

            // Update batch statistics
            updateBatchStats(stats);
        } catch (error) {
            console.error('Error updating display:', error);
        }
    }

    // Initial display
    await updateDisplay(batchSelect.value);

    // Handle batch selection changes
    batchSelect.addEventListener('change', (e) => {
        updateDisplay(e.target.value);
    });
});