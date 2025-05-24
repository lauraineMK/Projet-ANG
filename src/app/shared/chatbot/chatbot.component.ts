import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isOpen: boolean = false;
  nouveauMessage: string = '';
  messages: { from: 'user' | 'bot', text: string }[] = [];

  faq: { question: string, reponse: string }[] = [
    { question: 'bonjour', reponse: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?' },
    { question: 'horaires', reponse: 'Le musée est ouvert de 9h à 18h, du mardi au dimanche.' },
    { question: 'contribuer', reponse: 'Vous pouvez contribuer en créant un compte et en soumettant un événement historique.' },
    { question: 'contact', reponse: 'Vous pouvez nous contacter à contact@exploration-historique.fr.' },
    { question: 'adresse', reponse: 'Nous sommes situés au 123 rue du Musée, Paris.' }
  ];

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  envoyerMessage(): void {
    const message = this.nouveauMessage.trim();
    if (!message) return;

    this.messages.push({ from: 'user', text: message });
    this.nouveauMessage = '';

    const reponseFAQ = this.faq.find(entry => message.toLowerCase().includes(entry.question));
    if (reponseFAQ) {
      this.messages.push({ from: 'bot', text: reponseFAQ.reponse });
    } else {
      this.messages.push({ from: 'bot', text: "Je ne suis pas encore connecté à OpenAI dans cette démo." });
    }
  }
}
