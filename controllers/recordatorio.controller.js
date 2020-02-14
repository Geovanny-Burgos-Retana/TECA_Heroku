Recordatorio=require('../models/recordatorio');
recordatorioCtrl ={};

recordatorioCtrl.getRecordatorios = async(req, res)=>{
    recordatorios=await Recordatorio.find();
    res.json(recordatorios);

};
recordatorioCtrl.createRecordatorio = async(req, res)=>{
    recordatorio= new Recordatorio(req.body);
    await recordatorio.save();
    console.log(recordatorio);
    res.json('Recordatorio Guardado');
};

recordatorioCtrl.getRecordatorio = async(req,res)=>{
    console.log(req.params);
    recordatorio= await Recordatorio.findById(req.params.id);
    res.json(recordatorio);
};

recordatorioCtrl.updateRecordatorio =async(req, res)=>{
    recordatorio={
        idUsuario:req.body.idUsuario,
        mensaje:req.body.mensaje,
    };
    await Recordatorio.findByIdAndUpdate(req.params.id,{$set: recordatorio}, {new:true});
    res.json({status:'Recordatorio actualizado'});
};
recordatorioCtrl.deleteRecordatorio =async(req, es)=>{
    await Recordatorio.findByIdAndRemove(req.params.id);
    res.json({status: 'Recordatorio Eliminado'});
};
module.exports = recordatorioCtrl;