// require router and db items needed
const { route } = require('express/lib/application');
const { sendfile, sendFile } = require('express/lib/response');
const path = require('path');
const router = require('express').Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helper/fsUtils');

// GET Route for retrieving all the notes
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific note
router.get('/notes/:id', (req, res) => {
  const notes = req.params.noteId;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.noteId === notes);
      return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    });
});

// DELETE Route for a specific note
router.delete('/notes/:id', (req, res) => {
  const notes = req.params.noteId;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.noteId !== notes);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${note} has been deleted 🗑️`);
    });
});

// POST Route for a new UX/UI tip
router.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
    title,
    text,
    nodeId: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = router;











