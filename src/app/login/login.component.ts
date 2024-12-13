import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service'; // Import du service d'authentification
import { Router } from '@angular/router'; // Pour rediriger l'utilisateur après une connexion réussie
import { FormsModule } from '@angular/forms';
@Component({

  standalone: true,
  imports: [FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: LoginService, private router: Router) {}

  onLogin() {
    // Création de l'objet utilisateur avec email et password
    const user = {
      email: this.email,
      password: this.password,
    };

    // Appel du service pour la connexion
    this.authService.login(user).subscribe(
      (users) => {
        if (users.length > 0) {
          // Connexion réussie, redirection vers la page d'accueil
          this.router.navigate(['/home']);
        } else {
          alert('Identifiants incorrects');
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
      }
    );
  }
}

