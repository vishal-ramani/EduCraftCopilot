// backend/routes/courses.js
const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const { translateContent, generateVoiceover, generateLectureNotes } = require('../services/aiService');

// Create a new course
router.post('/', async (req, res) => {
    try {
        const { title, description, language, modules } = req.body;
        const newCourse = new Course({ title, description, language, modules, createdBy: req.user.id });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find({ createdBy: req.user.id });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Additional routes: Update, Delete, etc.

module.exports = router;
