import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit {

  data!:any[][];
  objData!:taquillero[];
  agencia:any=[];
  maxTiqueteGlobal=0;
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    const target : DataTransfer =  <DataTransfer> (evt.target);
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname : string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.crearObj();
    };
    reader.readAsBinaryString(target.files[0]);
  }

  crearObj(){
    let obj;
    this.objData=[];
    for (const iterator of this.data) {
      obj={
        nombre:iterator[0],
        agencia:iterator[1],
        origen:iterator[2],
        destino:iterator[3],
        year:iterator[4],
        month:iterator[5],
        precioFull:iterator[6],
        descuento:iterator[7],
        precioPagado:iterator[8],
        unknown:iterator[9],
        cantidadTiquete:iterator[10]
      };
      this.objData.push(obj);
    }
    this.dividirAgencia();
  }
  dividirAgencia(){
    this.agencia=[]
    let agencia:string[]=[],tmp;
    for (const iterator of this.objData) {
      // iterator.agencia
      tmp = agencia.filter(data => data==iterator.agencia);
      if (tmp.length>0) {
        // console.log(agencia.indexOf(iterator.agencia));
        this.agencia[agencia.indexOf(iterator.agencia)].push(iterator);
      } else {
        // console.log("asdasd")
        this.agencia.push([iterator])
        agencia.push(iterator.agencia)
        // this.objData.push(iterator);
        /* 
          var array = [2, 9, 9];
          array.indexOf(2);
        */
      }
      /* console.log(tmp) */
    }
    console.log(agencia)
    console.log(this.agencia)
  }
}

interface taquillero {
  agencia: string
  cantidadTiquete: number
  descuento: number
  destino: string
  month: number
  nombre: string
  origen: string
  precioFull: number
  precioPagado: number
  unknown:number
  year: number
}