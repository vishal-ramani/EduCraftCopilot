// Example function to generate lecture notes in the backend
const generateLectureNotes = async (content) => {
    try {
        const summary = await generateLectureNotes(content); // From aiService.js
        return summary;
    } catch (error) {
        throw error;
    }
};
