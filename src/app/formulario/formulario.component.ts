import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre: string = '';
  nombreInvalido: boolean = false;
  validarNombre(){
    const regex = /\d/; // Expresión regular para detectar números
    this.nombreInvalido = regex.test(this.nombre);
  }
}
