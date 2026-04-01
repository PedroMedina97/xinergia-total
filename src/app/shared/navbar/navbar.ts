import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);
  protected readonly isSpecialtiesOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);

    if (!this.isMenuOpen()) {
      this.isSpecialtiesOpen.set(false);
    }
  }

  protected toggleSpecialties(event: Event): void {
    event.preventDefault();
    this.isSpecialtiesOpen.update((isOpen) => !isOpen);
  }

  protected closeMenus(): void {
    this.isMenuOpen.set(false);
    this.isSpecialtiesOpen.set(false);
  }
}
