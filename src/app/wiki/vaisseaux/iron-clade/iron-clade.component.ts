import { Component, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';
import { ShipService } from '../../../services/shipService/ship.service'; 

@Component({
  selector: 'app-iron-clade',
  standalone: true,
  templateUrl: './iron-clade.component.html',
  styleUrls: ['./iron-clade.component.scss'],
})
export class IronCladeComponent implements OnInit {
  // Références aux onglets
  @ViewChild('specsTab') specsTab!: ElementRef<HTMLDivElement>;
  @ViewChild('armamentTab') armamentTab!: ElementRef<HTMLDivElement>;
  @ViewChild('historyTab') historyTab!: ElementRef<HTMLDivElement>;

  // Référence au fond avec parallaxe
  @ViewChild('parallaxBg') parallaxBg!: ElementRef<HTMLDivElement>;

  // Données dynamiques du vaisseau
  ship: any; // Les données du vaisseau seront stockées ici

  constructor(private ShipService: ShipService) {}

  ngOnInit(): void {
    // Charger les données du vaisseau (par exemple, en prenant le premier dans l'API)
    this.ShipService.getShips().subscribe((ship) => {
      this.ship = ship.find((ship: any) => ship.name === 'Ironclade'); // Filtre par nom ou autre critère
    });
  }

  /**
   * Affiche l'onglet sélectionné et cache les autres.
   * @param tabId L'identifiant de l'onglet à afficher (ex: 'specs', 'armament', 'history').
   */
  showTab(tabId: string): void {
    // Récupère tous les onglets
    const tabs = [
      this.specsTab.nativeElement,
      this.armamentTab.nativeElement,
      this.historyTab.nativeElement,
    ];

    // Cache tous les onglets
    tabs.forEach((tab) => tab.classList.add('hidden'));

    // Affiche l'onglet sélectionné
    if (tabId === 'specs') {
      this.specsTab.nativeElement.classList.remove('hidden');
    } else if (tabId === 'armament') {
      this.armamentTab.nativeElement.classList.remove('hidden');
    } else if (tabId === 'history') {
      this.historyTab.nativeElement.classList.remove('hidden');
    }
  }

  /**
   * Gère l'effet de parallaxe au défilement.
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollTop = window.scrollY;

    // Appliquer l'effet de parallaxe uniquement si l'élément est défini
    if (this.parallaxBg) {
      this.parallaxBg.nativeElement.style.transform = `translateY(${scrollTop * 0.5}px)`;
    }
  }
}

