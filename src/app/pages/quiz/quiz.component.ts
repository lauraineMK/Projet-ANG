import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  quiz: any[] = [];
  current = 0;
  loading = false;
  userAnswers: number[] = [];
  theme = '';
  score: number | null = null;

  constructor(private http: HttpClient) {}

  genererQuiz() {
    this.loading = true;
    this.http.post<any>('http://localhost:4200/quiz', { theme: this.theme }).subscribe({
      next: res => {
        this.quiz = res.quiz;
        this.userAnswers = Array(this.quiz.length).fill(null);
        this.current = 0;
        this.loading = false;
        this.score = null;
      },
      error: () => {
        alert("Erreur de génération du quiz");
        this.loading = false;
      }
    });
  }

  suivant() {
    if (this.current < this.quiz.length - 1) {
      this.current++;
    } else {
      this.calculerScore();
    }
  }

  calculerScore() {
    let correct = 0;
    this.quiz.forEach((q, index) => {
      if (this.userAnswers[index] === q.answer) correct++;
    });
    this.score = correct;
  }

  recommencer() {
    this.quiz = [];
    this.userAnswers = [];
    this.current = 0;
    this.score = null;
    this.theme = '';
  }
}
