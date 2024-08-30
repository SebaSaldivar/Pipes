import { Component } from '@angular/core';

interface Persona {
  DNI: string;
  Nombre: string;
  Activo: boolean;
  Edad: Date;
}

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})

export class MiComponenteComponent {
  personas: Persona[] = [
    { DNI: '12345678', Nombre: 'Juan Pérez', Activo: true, Edad: new Date(1980,2,15) },
    { DNI: '98765432', Nombre: 'María Rodríguez', Activo: true, Edad: new Date(1985,3,15) },
    { DNI: '56789012', Nombre: 'Pedro Gómez', Activo: false, Edad: new Date(1995,11,5) },
  ];
}
