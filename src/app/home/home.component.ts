import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Forcer la vidéo à être muette après que la vue soit initialisée
  ngAfterViewInit(): void {
    const videoElement = this.el.nativeElement.querySelector('video');
    if (videoElement) {
      // Utiliser Renderer2 pour forcer l'attribut muted
      this.renderer.setProperty(videoElement, 'muted', true);
      this.renderer.setAttribute(videoElement, 'muted', '');
      
      // Si la vidéo n'est pas lue automatiquement, essayer de la forcer à se lancer
      videoElement.play().catch((err: any) => {
        console.error('La lecture automatique a été bloquée :', err);
      });
    }
  }
}


