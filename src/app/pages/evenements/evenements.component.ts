import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent {
  evenements: {
  nom: string;
  periode: string;
  description: string;
  image: string;
  commentaires: string[];
}[] = [
  {
    nom: 'Révolution française',
    periode: '1789-1799',
    description: 'Un moment fondamental dans l’histoire de France.',
    image: 'https://m.media-amazon.com/images/I/71k7GwLWjpL._AC_UF1000,1000_QL80_.jpg',
    commentaires: []
  },
    {
        nom: 'Première Guerre mondiale',
        periode: '1914-1918',
        description: 'Un conflit mondial majeur ayant bouleversé le XXe siècle.',
        image: 'https://m.media-amazon.com/images/I/915v6CT-rqL._AC_UF1000,1000_QL80_.jpg',
        commentaires: []
         }
];

 


  nouveauxCommentaires: string[] = this.evenements.map(() => '');

  nouvelEvenement = {
    nom: '',
    periode: '',
    description: '',
    image: '',
  };

  imagePreview: string = '';

  ajouterCommentaire(index: number): void {
    const commentaire = this.nouveauxCommentaires[index].trim();
    if (commentaire) {
      this.evenements[index].commentaires.push(commentaire);
      this.nouveauxCommentaires[index] = '';
    }
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.nouvelEvenement.image = this.imagePreview;
      };
      reader.readAsDataURL(file);
    }
  }

  ajouterEvenement(): void {
    if (
      this.nouvelEvenement.nom &&
      this.nouvelEvenement.periode &&
      this.nouvelEvenement.description &&
      this.nouvelEvenement.image
    ) {
      this.evenements.push({
        ...this.nouvelEvenement,
        commentaires: []
      });
      this.nouvelEvenement = { nom: '', periode: '', description: '', image: '' };
      this.imagePreview = '';
      this.nouveauxCommentaires.push('');
    } else {
      alert("Tous les champs sont obligatoires.");
    }
  }
}
