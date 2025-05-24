import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheEvenementComponent } from './fiche-evenement.component';

describe('FicheEvenementComponent', () => {
  let component: FicheEvenementComponent;
  let fixture: ComponentFixture<FicheEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheEvenementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
