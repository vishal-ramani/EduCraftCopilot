// backend/services/aiService.js
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// Function to translate content using Sarvam API
const translateContent = async (text, targetLanguage) => {
    try {
        const response = await axios.post('https://api.sarvam.com/translate', {
            text,
            target_language: targetLanguage
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.SARVAM_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.translated_text;
    } catch (error) {
        console.error('Translation Error:', error);
        throw error;
    }
};

// Function to generate voiceover using Sarvam TTS API
const generateVoiceover = async (text, language) => {
    try {
        const response = await axios.post('https://api.sarvam.com/tts', {
            text,
            language
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.SARVAM_API_KEY}`,
                'Content-Type': 'application/json'
            },
            responseType: 'arraybuffer' // For audio files
        });
        // Save audio file to storage (e.g., AWS S3) and return URL
        // Placeholder for storage logic
        const audioUrl = 'https://your-storage-service.com/path-to-audio-file.mp3';
        return audioUrl;
    } catch (error) {
        console.error('Voiceover Generation Error:', error);
        throw error;
    }
};

// Function to generate lecture notes using Gemini API
const generateLectureNotes = async (content) => {
    try {
        const response = await axios.post('https://api.gemini.com/nlp/summarize', {
            text: content
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.summary;
    } catch (error) {
        console.error('Lecture Notes Generation Error:', error);
        throw error;
    }
};

module.exports = {
    translateContent,
    generateVoiceover,
    generateLectureNotes
};
