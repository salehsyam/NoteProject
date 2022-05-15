const express =require("express");
const router =express.Router();
const note_controller = require('../Controllers/noteController');

// router.get('/test' ,customer_controller.test)
// router.post('/create' ,customer_controller.customer_create)
// router.get('/:id' ,customer_controller.customer_show)
// router.put('/:id/update' ,customer_controller.customer_update)
// router.delete('/:id/delete' ,customer_controller.customer_delete)

router.get("/notes" , note_controller.getAllNotes);
router.post("/showlogin" , note_controller.saveLogin);

// router.post("/notes/save" , noteCtrl.saveNote);
// router.post("/showlogin" , noteCtrl.saveLogin);

// router.put("/notes/update" , noteCtrl.updateNote);
// router.delete("/notes/delete/:noteId" , noteCtrl.deleteNote);


module.exports = router;
