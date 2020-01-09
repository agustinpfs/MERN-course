const { Router } = require('express');
const router = Router(); //Router express method

const { getNotes, createNote, getNote, deleteNotes, updateNotes } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .delete(deleteNotes)
    .put(updateNotes);

module.exports = router;