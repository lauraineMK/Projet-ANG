import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  timeline = [
    {
      id: 1,
      date: '1789',
      titre: 'Révolution française',
      description: 'La prise de la Bastille marque le début d’une transformation politique majeure en France.',
      image: 'https://www.herodote.net/_images/revolution-bastille.jpg',
      resume: 'Un événement déclencheur de la fin de la monarchie absolue en France.',
      favori: false
    },
    {
      id: 2,
      date: '1969',
      titre: 'Premier pas sur la Lune',
      description: 'Neil Armstrong devient le premier homme à marcher sur la Lune.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Aldrin_Apollo_11.jpg',
      resume: 'Un pas pour l’homme, un bond de géant pour l’humanité.',
      favori: false
    },
    {
      id: 3,
      date: '1989',
      titre: 'Chute du mur de Berlin',
      description: 'Un moment historique symbolisant la fin de la Guerre froide.',
      image: 'https://www.radiofrance.fr/s3/cruiser-production-eu3/2019/08/cf2cc2ff-7eb7-4b89-bdd3-66f7260c2219/640x340_gettyimages-109895892.jpg',
      resume: 'Le symbole de la division de l’Europe s’effondre, réunifiant l’Allemagne.',
      favori: false
    }
  ];

  voirPlus(event: any): void {
    alert(`Résumé : ${event.resume}`);
  }

  toggleFavori(event: any): void {
    event.favori = !event.favori;
  }
} 
