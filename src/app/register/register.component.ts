import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service'; // Import du service d'authentification
import { Router } from '@angular/router'; // Pour rediriger après l'inscription
import { FormsModule } from '@angular/forms';

@Component({

  standalone: true,
  imports: [FormsModule],
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: LoginService, private router: Router) {}

  onRegister() {
    if (this.password === this.confirmPassword) {
      const user = { name: this.name, email: this.email, password: this.password };

      this.authService.register(user).subscribe(
        (response) => {
          alert('Inscription réussie');
          this.router.navigate(['/login']); // Rediriger vers la page de login
        },
        (error) => {
          console.error('Erreur lors de l\'inscription', error);
        }
      );
    } else {
      alert('Les mots de passe ne correspondent pas');
    }
  }
}

