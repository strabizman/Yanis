import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterModule, FormsModule], // Import de RouterModule pour routerLink
  template: `
    <app-navbar></app-navbar>

    <!-- Liens de navigation -->
    <nav class="flex space-x-4">
      <a routerLink="/" class="text-blue-500">Accueil</a>
      <a routerLink="/register" class="text-blue-500">Inscription</a>
      <a routerLink="/login" class="text-blue-500">Connexion</a>
      <a routerLink="/home" class="text-blue-500">Accueil principal</a>
      <a routerLink="/wikiShips" class="text-blue-500">Wiki Vaisseaux</a>
    </nav>
    <a routerLink="/Ironclade">Ironclade</a>

      <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MonApplication';
}

providers: [
  provideHttpClient(),
]
