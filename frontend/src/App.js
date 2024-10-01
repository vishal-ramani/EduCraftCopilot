// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateCourse from './components/CreateCourse';
import CourseList from './components/CourseList';
// Import other components as needed

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/create-course" element={<CreateCourse />} />
                <Route path="/courses" element={<CourseList />} />
                {/* Define other routes */}
            </Routes>
        </Router>
    );
}

export default App;
