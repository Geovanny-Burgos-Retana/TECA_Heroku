Ranking=require('../models/ranking');
rankingCtrl ={};

ranking.getRanking = async(req, res)=>{
    posiciones=await Ranking.find();
    res.json(posiciones);

};
usuarioCtrl.InsertInRanking = async(req, res)=>{
    ranking= new Ranking(req.body);
    await ranking.save();
    console.log(ranking);
    res.json('Usuario Guardado en el Ranking');
};

usuarioCtrl.getPosition = async(req,res)=>{
    console.log(req.params);
    usuario= await Ranking.findById(req.params.id);
    res.json(usuario);
};

rankingCtrl.updateInRanking =async(req, res)=>{
    ranking={
        idUsuario:req.body.idUsuario,
        porcentaje:req.body.porcentaje,      
    };
    await Ranking.findByIdAndUpdate(req.params.id,{$set: ranking}, {new:true});
    res.json({status:'Ranking actualizado'});
};
rankingCtrl.deleteOfRanking =async(req, es)=>{
    await Ranking.findByIdAndRemove(req.params.id);
    res.json({status: 'Eliminado del Ranking'});
};
module.exports = rankingCtrl;