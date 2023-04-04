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
  {
    name:"Elden Ring",
    description:"Elden Ring è un videogioco action RPG sviluppato dalla software house giapponese FromSoftware e pubblicato da Bandai Namco Entertainment. Il videogioco, diretto da Hidetaka Miyazaki, è stato realizzato in collaborazione con George R. R.",
    price:54.99,
    dataPubblicazione:"25/02/2022"
  },
  {
    name:"Fifa 22",
    description:"FIFA 22 è un videogioco di calcio sviluppato da EA Sports e pubblicato per PlayStation 4, PlayStation 5, Xbox One, Xbox Series X e Series S, Microsoft Windows, Nintendo Switch e Google Stadia il 1º ottobre 2021.",
    price:16.89,
    dataPubblicazione:"27/09/2021"
  },
  {
    name:"The Last of Us",
    description:"The Last of Us è un franchise di giochi survival horror action-adventure creato da Naughty Dog e Sony Interactive Entertainment. La serie è ambientata negli Stati Uniti post-apocalittici devastati da creature cannibaliste infettate da un fungo mutato del genere Cordyceps.",
    price:16.00,
    dataPubblicazione:"14/06/2013"
  },
  {
    name:"Stray",
    description:"Stray è un videogioco di avventura dinamica del 2022 sviluppato da BlueTwelve Studio e pubblicato dall'Annapurna Interactive per PlayStation 4, PlayStation 5 e Microsoft Windows. La storia narra le vicende di un gatto randagio che decide di tornare in superficie dopo essere precipitato in una voragine ed essersi ritrovato in una città sotterranea popolata da robot, macchine e batteri mutanti noti come Zurk. Nel corso delle sue avventure, il protagonista verrà aiutato da un drone di nome B-12.",
    price:23.99,
    dataPubblicazione:"19/07/2022"
  }
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
