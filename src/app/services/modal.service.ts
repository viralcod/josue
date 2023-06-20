import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal = [
    {
      amarres: 'Hechizos de amor, endulzamientos, como recuperar a tu ex, infedilidad o decepciones, revive la pasión. Alejamos esas personas que agobian tu vida, esos terceros que dañan una relación impidiendo tu felicidad. Revive la pasión con tu pareja. Somos profesionales en atracción, endulzamientos, ligas, rompimiento y devolviendo energías sentimentalmente.',
      limpiezas: 'Soy un maestro guía, te ayudaré con esas malas energías, espiritus que atormentan tu vida y no te dejan progresar... con mi sabiduria y asosería podrás recuperar tu vida a través de rituales que te harán vibrar de nuevo con los tesoros del universo.',
      recuperar: 'Contamos con todas las capacidades y preparación para asumir cualquier tipo de trabajo que sea requerido por nuestros clientes, consulte si esta viviendo periodos de dolor, angustia y desesperación, porque su ser amado se alejo o tiene otra persona.',
      suerte: '¿Quieres alcanzar tus metas en la vida? Todo se puede conseguir, encontrar la buena fortuna en el amor, el trabajo y el hogar es posible, tus sueños, deseos y anhelos que siempre has tenido se pueden lograr con la ayuda de nuestros conocimientos espirituales y ancestrales, ponte en contacto para realizar tu consulta.',
      problemas: 'Expertos en hacer confluir las energías para el amor, el dinero, la salud, consigue prosperidad, abundancia y dinero en todos sus proyectos. Haga que todo lo que piense se convierta en realidad, transforme su vida desde su mente.'
    },
  ]

  constructor() { }
}
