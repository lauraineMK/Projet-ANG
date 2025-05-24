import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  imports: []
})
export class AccueilComponent {
  constructor(private router: Router) {}

  goToConnexion(): void {
    this.router.navigate(['/connexion']);
  }
}
