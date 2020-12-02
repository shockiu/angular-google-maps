import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Marcador } from '../../models/marcador.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-marcador-dialog',
  templateUrl: './marcador-dialog.component.html',
  styleUrls: ['./marcador-dialog.component.css']
})
export class MarcadorDialogComponent implements OnInit {

  form: FormGroup

  constructor(  private fb : FormBuilder,
                private dialogRef: MatDialogRef<MarcadorDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public marcador: Marcador) { 
    
    this.form = this.fb.group({
      titulo: marcador.titulo,
      desc: marcador.desc
    })              

  }

  ngOnInit(): void {
 
  }
  guardarCambios() {
    this.dialogRef.close(this.form.value);
  }
  cerrarDialog() {
    this.dialogRef.close();
  }

}
