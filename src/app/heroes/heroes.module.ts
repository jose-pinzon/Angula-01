import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    // *En las declaraciones se definen los modulos que contiene
    // *Nuestro proyecto
    declarations:[
      HeroeComponent,
      ListadoComponent
    ],

    // *En este se declaran lo modulos que seran publicos
    exports:[
      ListadoComponent
    ],

    //*Aqui solo iran modulos de angular,
    imports:[
      CommonModule/*este es importante para que funcionen las directivas
      como ngif  */
    ]
})
export class HeroesModule {

}
