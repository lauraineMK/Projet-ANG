import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  imports: [CommonModule, FormsModule]
})
export class QuizComponent {
  currentQuestion = 0;
  userAnswers: number[] = [];

  questions = [
    {
      question: 'En quelle année a eu lieu la Révolution française ?',
      options: ['1776', '1789', '1812', '1848'],
      answer: 1
    },
    {
      question: 'Qui était le premier empereur romain ?',
      options: ['Jules César', 'Néron', 'Auguste', 'Caligula'],
      answer: 2
    },
    {
      question: 'Quel pays a lancé le premier satellite dans l’espace ?',
      options: ['USA', 'URSS', 'Chine', 'France'],
      answer: 1
    },
    {
      question: 'Qui a peint La Joconde ?',
      options: ['Raphaël', 'Michel-Ange', 'Léonard de Vinci', 'Van Gogh'],
      answer: 2
    },
    {
      question: 'En quelle année l’ONU a-t-elle été fondée ?',
      options: ['1919', '1939', '1945', '1955'],
      answer: 2
    }
  ];

  answerQuestion(index: number): void {
    this.userAnswers[this.currentQuestion] = index;
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      alert('Quiz terminé !');
      this.currentQuestion = 0;
      this.userAnswers = [];
    }
  }
}
