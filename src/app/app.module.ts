import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { FicheEvenementComponent } from './pages/fiche-evenement/fiche-evenement.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ModerationComponent } from './pages/moderation/moderation.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ChatbotComponent } from './shared/chatbot/chatbot.component';
import { routes } from './app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(NavbarComponent),
    importProvidersFrom(FooterComponent),
    importProvidersFrom(AccueilComponent),
    importProvidersFrom(EvenementsComponent),
    importProvidersFrom(FicheEvenementComponent),
    importProvidersFrom(AProposComponent),
    importProvidersFrom(ContactComponent),
    importProvidersFrom(ConnexionComponent),
    importProvidersFrom(InscriptionComponent),
    importProvidersFrom(DashboardComponent),
    importProvidersFrom(ModerationComponent),
    importProvidersFrom(QuizComponent),
    importProvidersFrom(TimelineComponent),
    importProvidersFrom(ChatbotComponent),
    provideRouter(routes)
  ]
});
