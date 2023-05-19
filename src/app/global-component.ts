import { Frequency } from "./common/frequency";

export class GlobalComponent {
    public static services: any[] = [{name: 'Facturación Electrónica', value:'FE'},
        {name: 'Nómina Electrónica', value:'NE'},
        {name: 'Documento Soporte', value:'DS'}];
    
    public static years: any[] = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];
    public static months: any[] = [{name: 'Enero', index: 1},
        {name: 'Febrero', index: 2},
        {name: 'Marzo', index: 3},
        {name: 'Abril', index: 4},
        {name: 'Mayo', index: 5},
        {name: 'Junio', index: 6},
        {name: 'Julio', index: 7},
        {name: 'Agosto', index: 8},
        {name: 'Septiembre', index: 9},
        {name: 'Octubre', index: 10},
        {name: 'Noviembre', index: 11},
        {name: 'Diciembre', index: 12}];
    
    public static frequencies: Frequency[] = [
            {frequencyId: 1, frequencyName: "Diario"},
            {frequencyId: 2, frequencyName: "Semanal"},
            {frequencyId: 3, frequencyName: "Quincenal"},
            {frequencyId: 4, frequencyName: "Mensual"},
            {frequencyId: 5, frequencyName: "Bimestral"},
            {frequencyId: 6, frequencyName: "Trimestral"},
            {frequencyId: 7, frequencyName: "Semestral"},
            {frequencyId: 8, frequencyName: "Anual"}];
        
    
}