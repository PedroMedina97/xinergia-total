import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';

type PromoSlide = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, OnDestroy {
  readonly promoSlides: PromoSlide[] = [
    {
      eyebrow: 'Beneficios',
      title: '50% de descuento en blanqueamiento',
      copy: 'Sonrie con mas confianza a un precio accesible.',
      image: 'assets/blanqueamiento.png',
      imageAlt: 'Paciente durante procedimiento de blanqueamiento dental'
     
    },
    {
      eyebrow: 'Beneficios',
      title: '50% de descuento en blanqueamiento',
      copy: 'Sonrie con mas confianza a un precio accesible.',
      image: 'assets/blanqueamiento.png',
      imageAlt: 'Paciente durante procedimiento de blanqueamiento dental'
    },
    {
      eyebrow: 'Beneficios',
      title: '50% de descuento en blanqueamiento',
      copy: 'Sonrie con mas confianza a un precio accesible.',
      image: 'assets/blanqueamiento.png',
      imageAlt: 'Paciente durante procedimiento de blanqueamiento dental'
    },
  ];

  readonly activePromoIndex = signal(0);

  private promoTimerId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startPromoAutoplay();
  }

  ngOnDestroy(): void {
    this.stopPromoAutoplay();
  }

  setPromoSlide(index: number): void {
    this.activePromoIndex.set(index);
    this.startPromoAutoplay();
  }

  private startPromoAutoplay(): void {
    this.stopPromoAutoplay();

    this.promoTimerId = setInterval(() => {
      this.activePromoIndex.update((current) => (current + 1) % this.promoSlides.length);
    }, 10000);
  }

  private stopPromoAutoplay(): void {
    if (!this.promoTimerId) {
      return;
    }

    clearInterval(this.promoTimerId);
    this.promoTimerId = null;
  }
}
