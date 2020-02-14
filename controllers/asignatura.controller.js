Asignatura=require('../models/asignatura');
asignaturaCtrl ={};

asignaturaCtrl.getAsignaturas = async(req, res)=>{
    asignaturas=await Asignatura.find();
    res.json(asignaturas);

};
asignaturaCtrl.createAsignatura = async(req, res)=>{
    asignatura= new Asignatura(req.body);
    await asignatura.save();
    console.log(asignatura);
    res.json('Asignatura Guardado');
};

asignaturaCtrl.getAsignatura = async(req,res)=>{
    console.log(req.params);
    asignatura= await Asignatura.findById(req.params.id);
    res.json(asignatura);
};

asignaturaCtrl.updateAsignatura =async(req, res)=>{
    asignatura={
        nombre:req.body.nombre,
    };
    await Asignatura.findByIdAndUpdate(req.params.id,{$set: asignatura}, {new:true});
    res.json({status:'Asignatura actualizado'});
};
asignaturaCtrl.deleteAsignatura =async(req, es)=>{
    await Asignatura.findByIdAndRemove(req.params.id);
    res.json({status: 'Asignatura Eliminado'});
};
module.exports = asignaturaCtrl;