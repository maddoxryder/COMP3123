const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

// ✅ Create a new Note
noteRoutes.post('/notes', async (req, res) => {
    try {
        if (!req.body.noteTitle || !req.body.noteDescription) {
            return res.status(400).send({ message: "Note title and description are required" });
        }

        const note = new noteModel({
            noteTitle: req.body.noteTitle,
            noteDescription: req.body.noteDescription,
            priority: req.body.priority || 'LOW',
            dateAdded: req.body.dateAdded || new Date().toLocaleDateString(),
            dateUpdated: req.body.dateUpdated || new Date().toLocaleDateString()
        });

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ Retrieve all Notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ Retrieve a single Note with noteId
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ Update a Note with noteId
noteRoutes.put('/notes/:noteId', async (req, res) => {
    try {
        const updatedNote = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            {
                noteTitle: req.body.noteTitle,
                noteDescription: req.body.noteDescription,
                priority: req.body.priority,
                dateUpdated: req.body.dateUpdated || new Date().toLocaleDateString()
            },
            { new: true } // return updated note
        );

        if (!updatedNote) return res.status(404).json({ message: "Note not found" });
        res.json(updatedNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ Delete a Note with noteId
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const deletedNote = await noteModel.findByIdAndDelete(req.params.noteId);
        if (!deletedNote) return res.status(404).json({ message: "Note not found" });
        res.json({ message: "Note deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = noteRoutes;
