const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: []})
notesCtrl.createNote = (req, res) => res.json({message: 'note saved'})
notesCtrl.getNote = (req, res) => res.json({message: 'alsdfhadskf'})
notesCtrl.updateNotes = (req, res) => res.json({message: 'note updated'})
notesCtrl.deleteNotes = (req, res) => res.json({message: 'note deleted'})






module.exports = notesCtrl;
