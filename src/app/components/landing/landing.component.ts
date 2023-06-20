import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  contenido: any = [];
  title: string;
  texto: string;
  constructor(private modalSvc: ModalService) { }

  ngOnInit(): void {
    this.contenido = this.modalSvc.modal;
    console.log(this.contenido);

  }

  openModal(titulo: string){
    if (titulo === 'Amarres de Amor') {
      this.title = titulo;
      this.texto = this.contenido[0].amarres;
    }
    if (titulo === 'Limpiezas') {
      this.title = titulo;
      this.texto = this.contenido[0].limpiezas;
    }
    if (titulo === 'Recuperar Pareja') {
      this.title = titulo;
      this.texto = this.contenido[0].recuperar;
    }
    if (titulo === 'Buena Suerte') {
      this.title = titulo;
      this.texto = this.contenido[0].suerte;
    }
    if (titulo === 'Problemas de Dinero') {
      this.title = titulo;
      this.texto = this.contenido[0].problemas;
    }
  }
}
