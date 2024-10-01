// Example function to translate content in the frontend
import axios from 'axios';

const translateContent = async (text, targetLanguage) => {
    try {
        const response = await axios.post('http://localhost:5000/api/translate', { text, targetLanguage });
        return response.data.translatedText;
    } catch (error) {
        console.error('Translation Error:', error);
        throw error;
    }
};
