import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: 'evenements', loadComponent: () => import('./pages/evenements/evenements.component').then(m => m.EvenementsComponent) },

  { path: 'evenement/:id', component: FicheEvenementComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'moderation', component: ModerationComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'timeline', component: TimelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }