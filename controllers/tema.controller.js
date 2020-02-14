Tema=require('../models/tema');
temaCtrl ={};

temaCtrl.getTemas = async(req, res)=>{
    temas=await Tema.find();
    res.json(temas);

};
temaCtrl.createTema = async(req, res)=>{
    tema= new Tema(req.body);
    await tema.save();
    console.log(tema);
    res.json('Tema Guardado');
};

temaCtrl.getTema = async(req,res)=>{
    console.log(req.params);
    tema= await Tema.findById(req.params.id);
    res.json(tema);
};

temaCtrl.updateTema =async(req, res)=>{
    tema={
        idUnidad:req.body.idUnidad,
        tema:req.body.tema,
    };
    await Tema.findByIdAndUpdate(req.params.id,{$set: tema}, {new:true});
    res.json({status:'Tema actualizado'});
};
temaCtrl.deleteTema =async(req, es)=>{
    await Tema.findByIdAndRemove(req.params.id);
    res.json({status: 'Tema Eliminado'});
};
module.exports = temaCtrl;