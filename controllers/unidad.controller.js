Unidad=require('../models/unidad');
unidadCtrl ={};

unidadCtrl.getUnidades = async(req, res)=>{
    unidades=await Unidad.find();
    res.json(unidades);

};
unidadCtrl.createUnidad = async(req, res)=>{
    unidad= new Unidad(req.body);
    await unidad.save();
    console.log(unidad);
    res.json('Unidad Guardada');
};

unidadCtrl.getUnidad = async(req,res)=>{
    console.log(req.params);
    unidad= await Unidad.findById(req.params.id);
    res.json(unidad);
};

unidadCtrl.updateUnidad =async(req, res)=>{
    unidad={
        idAsignatura:req.body.idAsignatura,
        nombre:req.body.nombre,
    };
    await Unidad.findByIdAndUpdate(req.params.id,{$set: unidad}, {new:true});
    res.json({status:'Unidad actualizada'});
};
unidadCtrl.deleteUnidad =async(req, es)=>{
    await Unidad.findByIdAndRemove(req.params.id);
    res.json({status: 'Unidad Eliminada'});
};
module.exports = unidadCtrl;