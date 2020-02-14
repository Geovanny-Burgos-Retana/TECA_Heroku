Estudiante=require('../models/estudiante');
estudianteCtrl ={};

estudianteCtrl.createEstudiante = async(req, res)=>{
    nuevoEstudiante= new Estudiante(req.body);
    await nuevoEstudiante.save((err, estudiante) => {
        if(err) { return res.status(501).json(err); }
        console.log(estudiante);
        return res.status(200).json(estudiante);
    });
};

estudianteCtrl.deleteEstudiante = async(req, res) => {
    await Estudiante.findByIdAndRemove(req.params.id);
    res.json({status: 'Estudiante Eliminado'});
};

estudianteCtrl.getEstudiantes = async(req, res)=>{
    estudiantes=await Estudiante.find();
    res.json(estudiantes)
};

estudianteCtrl.getEstudiante = async(req,res)=>{
    console.log(req.params);
    estudiante= await Estudiante.findById(req.params.id);
    res.json(estudiante);
}

estudianteCtrl.updateEstudiante =async(req, res)=>{
    estudiante={
        nombre:req.body.nombre,
        sexo:req.body.sexo,
        fechaNacimiento: req.body.fechaNacimiento,
        grado:req.body.grado,
        institucion:req.body.institucion,
        correo:req.body.email,
    };
    await Estudiante.findByIdAndUpdate(req.params.id,{$set: estudiante}, {new:true});
    res.json({status:'Estudiante actualizado'});
};

module.exports = estudianteCtrl;