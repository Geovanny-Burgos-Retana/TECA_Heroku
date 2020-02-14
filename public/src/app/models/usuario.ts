export class Usuario {
    constructor(
        public _id: string= '',
        public idUsuario: string= '',
        public email: string= '',
        public password: string= '',
        public tipo: string= '',
        public avatar: string= 'none',
        public editable: boolean= false,
    ) {}
}
