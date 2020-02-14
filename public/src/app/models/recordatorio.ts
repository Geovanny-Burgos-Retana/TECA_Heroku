export class Recordatorio {
    constructor(
        public _id: string= '',
        public idUsuario: string= '',
        public mensaje: string= '',
        public editable: boolean= false,
    ) {}
}
