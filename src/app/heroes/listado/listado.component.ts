import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  Heroes: string[] = ['Naruto','Goku','Ichigo','Asta','Deku']
  heroeEliminado:string = ''

  borrarHero():any{
    this.heroeEliminado =  this.Heroes.pop() || ''
  }



}
