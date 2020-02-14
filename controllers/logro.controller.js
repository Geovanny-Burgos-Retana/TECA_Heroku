Logro=require('../models/logro');
logroCtrl ={};

logroCtrl.getLogros = async(req, res)=>{
    logros=await Logro.find();
    res.json(logros);

};
logroCtrl.createLogro = async(req, res)=>{
    logro= new Logro(req.body);
    await logro.save();
    console.log(logro);
    res.json('Logro Guardado');
};

logroCtrl.getLogro = async(req,res)=>{
    console.log(req.params);
    logro= await Logro.findById(req.params.id);
    res.json(logro);
};

logroCtrl.updateLogro =async(req, res)=>{
    logro={
        idUsuario:req.body.idUsuario,
        logro:req.body.logro,
    };
    await Logro.findByIdAndUpdate(req.params.id,{$set: logro}, {new:true});
    res.json({status:'Logro actualizado'});
};
logroCtrl.deleteLogro =async(req, es)=>{
    await Logro.findByIdAndRemove(req.params.id);
    res.json({status: 'Logro Eliminado'});
};
module.exports = logroCtrl;