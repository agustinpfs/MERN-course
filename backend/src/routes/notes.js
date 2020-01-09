const { Router } = require('express');
const router = Router(); //Router express method

const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote);

module.exports = router;