const Docente = require('../models/docente');

const docenteCtrl = {};

docenteCtrl.createDocente = async (req, res) => {    
    nuevoDocente = new Docente(req.body);
    await nuevoDocente.save((err, docente) => {
        if(err) { return res.status(501).json(err); }
        console.log(docente);
        return res.status(200).json(docente);
    });
};

docenteCtrl.deleteDocente = async (req, res) => {
    await Docente.findByIdAndRemove(req.params.id, (err) => {
        if(err) { return res.status(501).json(err); }
    });
    return res.status(200).json({status: 'Docente Eliminado'});
};

docenteCtrl.getDocentes = async (req, res) => {
    const docentes = await Docente.find();
    res.json(docentes);
};

docenteCtrl.getDocente = async(req,res)=>{
    console.log(req.params);
    docente= await Docente.findById(req.params.id);
    res.json(docente);
};

docenteCtrl.updateDocente =async(req, res)=>{
    docente={
        nombre:req.body.nombre,
        sexo:req.body.sexo,
        fechaNacimiento: req.body.fechaNacimiento,
        especialidad:req.body.grado,
    };
    await Docente.findByIdAndUpdate(req.params.id,{$set: docente}, {new:true});
    res.json({status:'Docente actualizado'});
};

module.exports = docenteCtrl;