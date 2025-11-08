import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-vehiculos-destacados',
  imports: [CommonModule],
  templateUrl: './vehiculos-destacados.component.html',
  styleUrl: './vehiculos-destacados.component.scss'
})
export class VehiculosDestacadosComponent implements OnInit, AfterViewInit, OnDestroy {
  private slides!: NodeListOf<HTMLElement>;
  private prevBtn!: HTMLElement | null;
  private nextBtn!: HTMLElement | null;
  private currentIndex = -1;
  private keyListener!: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  datos: any[] = [
  {
    id: 1,
    brand: 'BMW',
    model: 'M3 Competition',
    year: 2024,
    type: 'Sedán deportivo',
    engine: '3.0L Twin-Turbo L6, gasolina',
    hp: 503,
    torqueNm: 650,
    transmission: 'Automática 8 vel.',
    priceMxn: 73400 * 18.2, // ≈ 1,336,880 MXN
    acceleration_0_100: '3.9 s',
    topSpeed: '290 km/h',
    imageUrl: 'assets/images/vehiculos/1.jpg'
  },
  {
    id: 2,
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2023,
    type: 'Súper deportivo',
    engine: '5.2L V10 atmosférico, gasolina',
    hp: 640,
    torqueNm: 600,
    transmission: 'Doble embrague 7 vel.',
    priceMxn: 248295 * 18.2, // ≈ 4,521,769 MXN
    acceleration_0_100: '3.2 s',
    topSpeed: '325 km/h',
    imageUrl: 'assets/images/vehiculos/4.jpg'
  },
  {
    id: 3,
    brand: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2024,
    type: 'Híbrido enchufable',
    engine: '4.0L V8 Twin-Turbo + 3 motores eléctricos',
    hp: 1000,
    torqueNm: 800,
    transmission: 'F1 DCT 8 vel.',
    priceMxn: 625000 * 18.2, // ≈ 11,375,000 MXN
    acceleration_0_100: '2.5 s',
    topSpeed: '340 km/h',
    imageUrl: 'assets/images/vehiculos/5.jpg'
  },
  {
    id: 4,
    brand: 'Porsche',
    model: '911 Turbo S',
    year: 2023,
    type: 'Coupé deportivo',
    engine: '3.8L Twin-Turbo Flat-6, gasolina',
    hp: 640,
    torqueNm: 800,
    transmission: 'PDK 8 vel.',
    priceMxn: 207000 * 18.2, // ≈ 3,767,400 MXN
    acceleration_0_100: '2.7 s',
    topSpeed: '330 km/h',
    imageUrl: 'assets/images/vehiculos/6.jpg'
  },
  {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'GLE SUV',
    year: 2023,
    type: 'SUV de lujo',
    engine: '3.0L Twin-Turbo L6 Mild Hybrid (EQ Boost)',
    hp: 362,
    torqueNm: 500,
    transmission: 'Automática 9 vel.',
    priceMxn: 82000 * 18.2, // ≈ 1,492,400 MXN
    acceleration_0_100: '5.7 s',
    topSpeed: '250 km/h',
    imageUrl: 'assets/images/vehiculos/7.jpg'
  },
  {
    id: 6,
    brand: 'Range Rover',
    model: 'Velar',
    year: 2023,
    type: 'SUV premium',
    engine: '3.0L Turbo L6, gasolina',
    hp: 395,
    torqueNm: 550,
    transmission: 'Automática 8 vel.',
    priceMxn: 79000 * 18.2, // ≈ 1,437,800 MXN
    acceleration_0_100: '5.0 s',
    topSpeed: '240 km/h',
    imageUrl: 'assets/images/vehiculos/8.jpg'
  },
  {
    id: 7,
    brand: 'Chevrolet',
    model: 'Chevy Pop',
    year: 2004,
    type: 'Hatchback compacto',
    engine: '1.6L 4 cilindros en línea, gasolina',
    hp: 92,
    torqueNm: 132,
    transmission: 'Manual 5 vel.',
    priceMxn: 78000, // promedio usado
    acceleration_0_100: '12.5 s',
    topSpeed: '170 km/h',
    imageUrl: 'assets/images/vehiculos/chevypop.webp'
  }
];


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const native = this.el.nativeElement as HTMLElement;
    this.slides = native.querySelectorAll('.slide');
    this.prevBtn = native.querySelector('.nav-prev');
    this.nextBtn = native.querySelector('.nav-next');

    // 🔹 Asigna eventos
    this.slides.forEach((slide, index) => {
      this.renderer.listen(slide, 'click', () => this.setActiveSlide(index));
    });

    if (this.prevBtn) {
      this.renderer.listen(this.prevBtn, 'click', () => this.previousSlide());
    }

    if (this.nextBtn) {
      this.renderer.listen(this.nextBtn, 'click', () => this.nextSlide());
    }

    // 🔹 Listener global para teclado
    this.keyListener = this.renderer.listen('document', 'keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') this.previousSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });
  }

  private setActiveSlide(index: number): void {
    if (this.currentIndex === index) {
      this.slides.forEach((slide) => slide.classList.remove('active'));
      this.currentIndex = -1;
    } else {
      this.slides.forEach((slide) => slide.classList.remove('active'));
      this.slides[index].classList.add('active');
      this.currentIndex = index;
    }
  }

  private nextSlide(): void {
    const nextIndex =
      this.currentIndex === -1 ? 0 : (this.currentIndex + 1) % this.slides.length;
    this.setActiveSlide(nextIndex);
  }

  private previousSlide(): void {
    const prevIndex =
      this.currentIndex === -1
        ? this.slides.length - 1
        : (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.setActiveSlide(prevIndex);
  }

  ngOnDestroy(): void {
    // 🔹 Limpieza del listener global
    if (this.keyListener) this.keyListener();
  }
}


