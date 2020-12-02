import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MarcadorDialogComponent } from './components/marcador-dialog/marcador-dialog.component';

// AIzaSyD182tLKcpcscTywM-cjNBeGidi2evlU3k

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MarcadorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD182tLKcpcscTywM-cjNBeGidi2evlU3k'
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
