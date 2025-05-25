import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName = 'Lauraine';
  stats = [
    { label: 'Événements publiés', value: 12, icon: '📜' },
    { label: 'Favoris', value: 8, icon: '❤️' },
    { label: 'Commentaires', value: 23, icon: '💬' },
    { label: 'Quiz complétés', value: 5, icon: '✅' }
  ];

  notifications = [
    '2 nouvelles contributions à valider',
    '1 commentaire en attente'
  ];
}
