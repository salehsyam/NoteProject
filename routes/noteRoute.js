const express =require("express");
const router =express.Router();
const note_controller = require('../Controllers/noteController');


router.get("/notes" , note_controller.getAllNotes);
router.post("/notes/save" , note_controller.saveNote);
router.put("/notes/update" , note_controller.updateNote);
router.delete("/notes/delete/:noteId" , note_controller.deleteNote);


module.exports = router;
