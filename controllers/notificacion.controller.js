Notificacion=require('../models/notificacion');
notificacionCtrl ={};

notificacionCtrl.getNotificaciones = async(req, res)=>{
    notificaciones=await Notificacion.find();
    res.json(notificaciones);

};
notificacionCtrl.createNotificacion = async(req, res)=>{
    notificacion= new Notificacion(req.body);
    await notificacion.save();
    console.log(notificacion);
    res.json('Notificacion Gardada');
};

notificacionCtrl.getNotificacion = async(req,res)=>{
    console.log(req.params);
    notificacion= await Notificacion.findById(req.params.id);
    res.json(notificacion);
};

notificacionCtrl.updateNotificacion =async(req, res)=>{
    notificacion={
        idUsuario:req.body.idUsuario,
        mensaje:req.body.mensaje,
    };
    await Notificacion.findByIdAndUpdate(req.params.id,{$set: notificacion}, {new:true});
    res.json({status:'Notificacion actualizada'});
};
notificacionCtrl.deleteNotificacion =async(req, es)=>{
    await Notificacion.findByIdAndRemove(req.params.id);
    res.json({status: 'Notificacion Eliminada'});
};
module.exports = notificacionCtrl;