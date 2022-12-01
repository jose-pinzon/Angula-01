import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl:'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Iroman'
    edad: number = 40

    get nombreCapitalizado(){
      return this.nombre.toUpperCase()
    }


    ObtenerNombre() : string {
      return `${ this.nombre } - ${ this.edad }`
    }

    CambiarNombre():void {
      this.nombre = 'SpiderMan'
    }

    CambiarEdad():void{
      this.edad = 35
    }

}
