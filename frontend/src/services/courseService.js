// frontend/src/services/courseService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses';

export const createCourse = async (courseData, token) => {
    try {
        const response = await axios.post(API_URL, courseData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getCourses = async (token) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Additional functions: updateCourse, deleteCourse, etc.
    