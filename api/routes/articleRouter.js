const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

const articleController = require('../controllers/articleController');

router.get('/articles', authController.authorizeUser, articleController.showArticles);
router.get('/article/:id', articleController.showOneArticle);
router.post('/article/add', articleController.addArticle);
router.delete('/article/delete/:id', articleController.deleteArticle);
router.put('/article/update/:id', articleController.updateArticle);

module.exports = router;