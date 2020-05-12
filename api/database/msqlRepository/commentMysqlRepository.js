const sequelize = require('../../database/conexions/sequalize');

const Comment = sequelize.Comment;

exports.showComments = async () => {
    return await Comment.findAll()
};

exports.showOneComment = async (idToFind) => {
    return await Comment.findOne({ where: {id: idToFind} })
}

exports.addComment = async (newComment) => {
    try{
        await Comment.create(newComment)
        return await Comment.findOne({ where: {id: newComment.id} }); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await Comment.findAll(); 
    }
}

exports.deleteComment = async (idToDelete) => {
    try{
        await Comment.destroy({
            where: {
                id: parseInt(idToDelete)
            }
        });
        return await Comment.findAll(); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await Comment.findAll(); 
    }
}

exports.updateComment = async (idToUpdate, reqToUpdate) =>{
    try{
        await Comment.update(reqToUpdate , {
            where: {
              id: idToUpdate
            }
          });
        return await Comment.findAll(); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await Comment.findAll(); 
    }
}

