// backend/models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    language: { type: String, default: 'English' },
    modules: [
        {
            title: String,
            content: String,
            media: [String], // URLs to images, animations, etc.
            voiceover: String, // URL to voiceover audio
            notes: String,
        }
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
