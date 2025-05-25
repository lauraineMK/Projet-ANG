import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moderation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent {
  contributions = [
    {
      titre: 'Bataille de Marignan',
      auteur: 'Rodrigue',
      type: 'événement',
      date: '2025-05-01',
      description: 'Un grand affrontement du XVIe siècle...',
      image: 'https://historyweb.fr/wp-content/uploads/2015/09/bataille-marignan-histoire-historyweb-1024x520.jpg'
    },
    {
      titre: 'Révolution de 1848',
      auteur: 'Malle',
      type: 'commentaire',
      date: '2025-05-02',
      description: 'Révolte sociale historique...',
      image: ''
    }
  ];

  valider(titre: string) {
    alert(`✅ Contribution validée : ${titre}`);
  }

  refuser(titre: string) {
    alert(`❌ Contribution refusée : ${titre}`);
  }
}

