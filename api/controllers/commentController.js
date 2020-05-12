const database = require('../database/msqlRepository/commentMysqlRepository');

exports.showComments = async (req,res) => {
    comments = await database.showComments();
    res.json(comments);
};

exports.showOneComment = async (req,res) => {
    comment = await database.showOneComment(req.params.id);
    res.json(comment);
}

exports.addComment = async (req, res) => {
    comment = {...req.body};
    addCommentResponse = await database.addComment(comment);
    res.json(addCommentResponse);
}

exports.deleteComment = async (req, res) => {
    deleteCommentResponse = await database.deleteComment(req.params.id);
    res.json(deleteCommentResponse);
}

exports.updateComment = async (req, res) =>{
    comment = await database.updateComment(req.params.id, {...req.body});
    res.json(comment);
}