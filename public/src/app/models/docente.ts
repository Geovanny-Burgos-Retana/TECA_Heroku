export class Docente {
    constructor(
        public _id: string= '',
        public nombre: string= '',
        public sexo: string = '',
        public fechaNacimiento: Date = null,
        public especialidad: string= '',
        public editable: boolean= false
    ) {}
}
