import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../models/marcador.model';
import { MouseEvent } from '@agm/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MarcadorDialogComponent } from '../marcador-dialog/marcador-dialog.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  marcadores: Marcador[] = [];
 
  lat = 51.678418;
  lng = 7.809007;

  constructor(  private snackBar: MatSnackBar,
                private dialog: MatDialog ) { 
    if( localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse( localStorage.getItem('marcadores') );
    }
  }

  ngOnInit(): void {
  }

  agregarMarcador(event: MouseEvent) {
    const { lat, lng } = event.coords;
    const newMarcador = new Marcador(lat, lng);
    this.marcadores.push( newMarcador );
    this.guardarMarcd();
    this.snackBar.open('Marcador creado', 'Cerrar', {
      duration: 2000
    });
  }

  eliminarMarcador(index: number) {
    this.marcadores.splice(index, 1);
    this.guardarMarcd();
    this.snackBar.open('Marcador eliminado', 'Cerrar', {
      duration: 2000
    });
  }

  guardarMarcd() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  abrirDialogMarc(marcador: Marcador) {
    let { titulo, desc } = marcador;
    const dialogRef = this.dialog.open(MarcadorDialogComponent, {
      width: '250px',
      data: { titulo, desc }
    });

    dialogRef.afterClosed().subscribe( result=> {
      console.log(result);
     
    });
  }

}
