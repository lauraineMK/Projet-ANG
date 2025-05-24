import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'], // ✅ Corrigé ici
  imports: [CommonModule, FormsModule]
})
export class ConnexionComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login(): void {
    if (this.loginData.email && this.loginData.password) {
      console.log('Connexion réussie :', this.loginData);
      this.router.navigate(['/mon-compte']);
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  loginWith(provider: string): void {
    alert(`Connexion avec ${provider} en cours (simulation)`);
    this.router.navigate(['/mon-compte']);
  }
}
