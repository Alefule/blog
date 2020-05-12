const sequelize = require('../../database/conexions/sequalize');

const Article = sequelize.Article;

exports.showArticles = async () => {
    return await Article.findAll()
};

exports.showOneArticle = async (idToFind) => {
    return await Article.findOne({ where: {id: idToFind} })
}

exports.addArticle = async (newArticle) => {
    try{
        await Article.create(newArticle)
        return await Article.findOne({ where: {id: newArticle.id} }); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await Article.findAll(); 
    }
}

exports.deleteArticle = async (idToDelete) => {
    try{
        await Article.destroy({
            where: {
                id: parseInt(idToDelete)
            }
        });
        return await Article.findAll(); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await Article.findAll(); 
    }
}

exports.updateArticle = async (idToUpdate, reqToUpdate) =>{
    try{
        await Article.update(reqToUpdate , {
            where: {
              id: idToUpdate
            }
          });
        return await Article.findAll(); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await Article.findAll(); 
    }
}

