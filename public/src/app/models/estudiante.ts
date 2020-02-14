export class Estudiante {
    constructor(
        public _id: string= '',
        public nombre: string= '',
        public sexo: string = '',
        public fechaNacimiento: Date = null,
        public grado: string= '',
        public institucion: string= '',
        public editable: boolean= false
    ) {}
}
