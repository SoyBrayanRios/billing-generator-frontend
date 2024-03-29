import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Workbook } from 'exceljs';
import * as fileSaver from 'file-saver';
import { BillingService } from './billing.service';
@Injectable({
  providedIn: 'root'
})
export class BillDetailService {

  private baseUrl = 'http://localhost:8080/api/bill-detail';
  rows: string[] = [];
  smartRows: string[] = [];

  constructor(private httpClient: HttpClient,
    private billingService: BillingService) { }

  getDetailList(): Observable<any> {
    const searchUrl = `${this.baseUrl}/list`;
    return this.httpClient.get<any>(searchUrl);
  }

  async downloadFaceldiExcel(year: number, month: number, bills: string[], module: string) {
    const fileName = `Facturacion_${year}_${month}_${module}_Faceldi.xlsx`;
    const header = [
      'Fc_Tipo Operación',
      'Fc_Prefijo',
      'Fc_Nro Consecutivo',
      'Fc_Fecha documento',
      'Fc_Fecha vencimiento',
      'Fc_Tipo Documento',
      'Fc_Observación del Documento',
      'Fc_Divisa',
      'Fc_Tasa de Cambio',
      'Fc_Fecha Tasa de Cambio',
      'Fc_Fecha Inicio Periodo de Facturación',
      'Fc_Fecha de fin del periodo de facturación',
      'NT_Factura Aplicada',
      'NT_Concepto Notas',
      'Fc_Referencia Orden de Compra',
      'Fc_Orden de Pedido',
      'Fc_Orden de Entrega (remisión)',
      'Fc_Referencia de transacción',
      'Fc_Número de convenio/promoción/ regalo',
      'Fc_Número del pedido',
      'Fc_Documento Referenciado',
      'Em_Código Sucursal',
      'Fc_Forma de Pago',
      'Fc_Medio de Pago',
      'Fc_Id Anticipo',
      'Fc_Valor  Anticipo',
      'Fc_Fecha  Anticipo',
      'Fc_% Descuento',
      'Fc_Código Descuento',
      'Fc_% Cargo',
      'Cl_Tipo de Organización (personas)',
      'Cl_Tipo de Régimen',
      'Cl_Nombre Comercial',
      'Cl_Código Dep Municipio',
      'Cl_Código del País',
      'Cl_Código Postal',
      'Cl_Dirección',
      'Cl_Nombre Legal',
      'Cl_Tipo_id_adquiriente',
      'Cl_nro_id_adquiriente',
      'Cl_Cod_Adquiriente',
      'Cl_Código Responsabilidades Fiscales',
      'Cl_Código Municipio',
      'Cl_Código Postal_2',
      'Cl_Dirección_2',
      'Cl_Código del País_2',
      'Cl_Matricula Mercantil',
      'Cl_Nombre Contacto',
      'Cl_Telefono',
      'Cl_Celular',
      'Cl_Correo Electronico',
      'Pr_Código Producto',
      'Pr_Descripción',
      'Pr_Descripción Adicional',
      'Pr_Información Adicional (Nombre)',
      'Pr_Información Adicional (Valor)',
      'Pr_Precio Unitario',
      'Pr_Cantidad',
      'Pr_Unidad de Medida',
      'Pr_% Descuento',
      'Pr_% Cargo',
      'Pr_Razón del Descuento o Cargo',
      'Pr_Base Gravable',
      'Pr_IVA',
      'Pr_IC',
      'Pr_ICA',
      'Pr_INC',
      'Pr_ReteIVA',
      'Pr_ReteFuente',
      'Pr_ReteICA',
      'Pr_FtoHorticultura',
      'Pr_Timbre',
      'Pr_Bolsas',
      'Pr_INCarbono',
      'Pr_INCombustibles',
      'Pr_Sobretasa Combustibles',
      'Pr_Sordicom',
      'Pr_Otras contribuciones',
      'Pr_Marca Producto',
      'Pr_Modelo Producto',
      'Pr_Tipo ID Mandante',
      'Pr_Número ID Mandante',
      'Exp_Condiciones de Entrega',
      'Exp_Subpartida Arancelaria',
      'Campo85',
      'Ent_Dep Municipio',
      'Ent_Código postal',
      'Ent_Dirección de Entrega',
      'Campo89',
      'Otr_Elaborado',
      'Otr_Revisado',
      'Otr_Vendedor',
      'Fc_Observaciones Item',
      'Campo94',
      'Campo95',
      'Campo96',
      'Campo97'      
    ];

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Archivo_de_salida_Faceldi');

    worksheet.addRow(header);

    if (bills == null || bills.length == 0) {
      this.billingService.getFaceldiReport(year, month, module).subscribe({
        next: response => {
          this.rows = response
          this.rows.forEach(row => {
            let rowArray: any = row.split(';');
            rowArray[2] =  Number(rowArray[2]);
            rowArray[56] = Number(rowArray[56]);
            rowArray[57] = Number(rowArray[57]);
            rowArray[62] = Number(rowArray[62]);
            rowArray[63] = Number(rowArray[63]);
            worksheet.addRow(rowArray);
          });
          workbook.xlsx.writeBuffer().then((data: any) => {
            const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fileSaver.saveAs(blob, fileName);
          });
        },
        error: err => {
          console.log(err);
        }
      });
    } else {
      bills.forEach(row => {
        let rowArray: any = row.split(';');
        rowArray[2] =  Number(rowArray[2]);
        rowArray[56] = Number(rowArray[56]);
        rowArray[57] = Number(rowArray[57]);
        rowArray[62] = Number(rowArray[62]);
        rowArray[63] = Number(rowArray[63]);
        worksheet.addRow(rowArray);  
      });
      workbook.xlsx.writeBuffer().then((data: any) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fileSaver.saveAs(blob, fileName);
      });
    }
  }

  async downloadSmartCsv(year: number, month: number, env: string, module: string) {
    const fileName13 = `Facturacion_${year}_${month}_${module}_Smart_13.csv`;
    const fileName31 = `Facturacion_${year}_${month}_${module}_Smart_31.csv`;
    const header = [
      'AD_Org_ID[Name]',
      'DocumentNo',
      'Description',
      'C_DocTypeTarget_ID[Name]',
      'DateInvoiced',
      'DateAcct',
      'C_BPartner_ID[Value]',
      'AD_User_ID[Name]',
      'M_PriceList_ID[Name]',
      'SalesRep_ID[Name]',
      'PaymentRule',
      'C_PaymentTerm_ID[Value]',
      'C_Project_ID[Value]',
      'C_Activity_ID[Value]',
      'C_InvoiceLine>AD_Org_ID[Name]',
      'C_InvoiceLine>C_Invoice_ID[DocumentNo]',
      'C_InvoiceLine>Line',
      'C_InvoiceLine>M_Product_ID[Value]',
      'C_InvoiceLine>Description',
      'C_InvoiceLine>QtyEntered',
      'C_InvoiceLine>C_UOM_ID[Name]',
      'C_InvoiceLine>PriceEntered',
      'C_InvoiceLine>PriceList',
      'C_InvoiceLine>C_Tax_ID[Name]'
    ];

    this.billingService.getSmartReport(year, month, env, module).subscribe({
      next: response => {
        let content13 = header + "\n";
        let content31 = header + "\n";
        this.smartRows = response;
        
        this.smartRows.forEach(row => {
          let rowArray: any[] = row.split(',');
          if (rowArray[rowArray.length - 1] == 13) {
            rowArray.pop();
            this.wipeLine(rowArray);
            content13 += rowArray +"\n";  
          } else {
            rowArray.pop();
            this.wipeLine(rowArray);
            content31 += rowArray +"\n";  
          } 
        });

        const data13: Blob = new Blob([content13], {
          type: "text/csv;charset=utf-8"
        });

        const data31: Blob = new Blob([content31], {
          type: "text/csv;charset=utf-8"
        });

        fileSaver.saveAs(data13, fileName13);
        fileSaver.saveAs(data31, fileName31);
      },
      error: err => {
        console.log(err);
      }
    });  
  }

  wipeLine(line : any[]): any[] {
    let toDelete = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15];

    if (line[16] > 1) {
      for (let i = 0; i < line.length; i++) {
        if (toDelete.includes(i)) {
          line[i] = '';
        }
      } 
    }
    
    return line;
  }
}
