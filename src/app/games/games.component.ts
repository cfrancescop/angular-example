import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { MatTableDataSource } from '@angular/material/table';
export interface GameElement {
  name: string;
  description:string;
  /**
   * Data in formato dd/MM/yyyy
   */
  dataPubblicazione:string;
  price:number;

}

const ELEMENT_DATA: GameElement[] = [
  // che dati ?? 
];

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  constructor(private datePipe:DatePipe){}
  displayedColumns: string[] = ['name', 
  'description',
  'dataPubblicazione',
   'price'];
  dataSource =  new MatTableDataSource(ELEMENT_DATA);
  dataSelezionata:Date|null=null;

  applyFilter() {
    const filterValue = this.datePipe.transform(this.dataSelezionata,"dd/MM/yyyy");
    // filtrare su una determinata colonna
  }
}
