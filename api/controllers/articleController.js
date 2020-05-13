const database = require('../database/msqlRepository/articleMysqlRepository');

exports.showArticles = async (req,res) => {
    articles = await database.showArticles();
    res.json(articles);
};

exports.showOneArticle = async (req,res) => {
    article = await database.showOneArticle(req.params.id);
    res.json(article);
}

exports.addArticle = async (req, res) => {
    article = {...req.body};
    addArticleResponse = await database.addArticle(article);
    res.json(addArticleResponse);
}

exports.deleteArticle = async (req, res) => {
    deleteArticleResponse = await database.deleteArticle(req.params.id);
    res.json(deleteArticleResponse);
}

exports.updateArticle = async (req, res) =>{
    articles = await database.updateArticle(req.params.id, {...req.body});
    res.json(articles);
}