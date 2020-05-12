const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

const commentController = require('../controllers/commentController');

router.get('/comments', authController.authorizeUser, commentController.showComments);
router.get('/comment/:id', commentController.showOneComment);
router.post('/comment/add', commentController.addComment);
router.delete('/comment/delete/:id', commentController.deleteComment);
router.put('/comment/update/:id', commentController.updateComment);

module.exports = router;