// frontend/src/components/CreateCourse.js
import React, { useState } from 'react';
import { createCourse } from '../services/courseService';

const CreateCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('English');
    const [modules, setModules] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const courseData = { title, description, language, modules };
        const token = localStorage.getItem('token'); // Assuming JWT token is stored in localStorage
        try {
            const newCourse = await createCourse(courseData, token);
            console.log('Course Created:', newCourse);
            // Redirect or update UI accordingly
        } catch (error) {
            console.error('Error Creating Course:', error);
        }
    };

    return (
        <div>
            <h2>Create New Course</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Language:</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Marathi">Marathi</option>
                        {/* Add more languages as needed */}
                    </select>
                </div>
                {/* Add modules input fields */}
                <button type="submit">Create Course</button>
            </form>
        </div>
    );
};

export default CreateCourse;
