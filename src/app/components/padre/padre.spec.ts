import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Padre } from './padre';

describe('Padre', () => {
  let component: Padre;
  let fixture: ComponentFixture<Padre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Padre],
    }).compileComponents();

    fixture = TestBed.createComponent(Padre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('muestra en el padre el mensaje escrito en el hijo', async () => {
    const entrada = fixture.nativeElement.querySelector('#al_padre') as HTMLInputElement;
    entrada.value = 'Hola desde el hijo';
    entrada.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();

    const mensaje = fixture.nativeElement.querySelector('p span') as HTMLSpanElement;
    expect(mensaje.textContent).toBe('Hola desde el hijo');
  });
});
