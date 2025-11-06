import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
  selector: 'app-tipos-vehiculos',
  imports: [FuseCardComponent, CommonModule],
  templateUrl: './tipos-vehiculos.component.html',
  styleUrl: './tipos-vehiculos.component.scss'
})
export class TiposVehiculosComponent {

  listatipoVehiculos:any[] = [
    { nombre: "cabriolet", img: "assets/images/tipo-vehiculos/cabriolet.png" },
    { nombre: "coupe suv", img: "assets/images/tipo-vehiculos/coupe suv.png" },
    { nombre: "coupe", img: "assets/images/tipo-vehiculos/coupe.png" },
    { nombre: "crossover", img: "assets/images/tipo-vehiculos/crossover.png" },
    { nombre: "hatchback", img: "assets/images/tipo-vehiculos/hatchback.png" },
    { nombre: "micro", img: "assets/images/tipo-vehiculos/micro.png" },
    { nombre: "muscle", img: "assets/images/tipo-vehiculos/muscle.png" },
    { nombre: "offroader", img: "assets/images/tipo-vehiculos/offroader.png" },
    { nombre: "pickup", img: "assets/images/tipo-vehiculos/pickup.png" },
    { nombre: "sedan", img: "assets/images/tipo-vehiculos/sedan.png" },
    { nombre: "sport", img: "assets/images/tipo-vehiculos/sport.png" },
    { nombre: "suv", img: "assets/images/tipo-vehiculos/suv.png" },
    { nombre: "van", img: "assets/images/tipo-vehiculos/van.png" },
    { nombre: "wagon", img: "assets/images/tipo-vehiculos/wagon.png" },
  ]
}
