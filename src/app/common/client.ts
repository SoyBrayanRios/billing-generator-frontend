import { Alliance } from "./alliance";
import { Branch } from "./branch";

export class Client {
    nit: string;
    tipoIdentificacion: number;
    tipoPersona: number;
    tipoRegimen: number;
    razonSocial: string;
    primerApellido: string;
    segundoApellido: string;
    primerNombre: string;
    segundoNombre: string;
    departamento: number;
    municipio: number;
    direccion: number;
    zonaPostal: string;
    correoElectronico: string;
    documentoEquivalente: boolean;
    alliance: Alliance;
    dv: string;
    branches: Branch[];

    constructor(nit: string,
        tipoIdentificacion: number,
        tipoPersona: number,
        tipoRegimen: number,
        razonSocial: string,
        primerApellido: string,
        segundoApellido: string,
        primerNombre: string,
        segundoNombre: string,
        departamento: number,
        municipio: number,
        direccion: number,
        zonaPostal: string,
        correoElectronico: string,
        documentoEquivalente: boolean,
        alliance: Alliance,
        dv: string,
        branches: Branch[]) {
            this.nit = nit;
            this.tipoIdentificacion = tipoIdentificacion;
            this.tipoPersona = tipoPersona;
            this.tipoRegimen = tipoRegimen;
            this.dv = dv;
            this.razonSocial = razonSocial;
            this.primerNombre = primerNombre;
            this.segundoNombre = segundoNombre;
            this.primerApellido = primerApellido;
            this.segundoApellido = segundoApellido;
            this.departamento = departamento;
            this.municipio = municipio;
            this.direccion = direccion;
            this.zonaPostal = zonaPostal;
            this.correoElectronico = correoElectronico;
            this.documentoEquivalente = documentoEquivalente;
            this.alliance = alliance;
            this.branches = branches;
    }
}
