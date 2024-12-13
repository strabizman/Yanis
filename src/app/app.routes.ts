import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShipsWikiComponent } from './ships-wiki/ships-wiki.component';
import { TradingShipComponent } from './wiki/category/trading-ship/trading-ship.component';
import { RaceShipComponent } from './wiki/category/race-ship/race-ship.component';
import { MilitaryShipComponent } from './wiki/category/military-ship/military-ship.component';
import { IndustrialShipComponent } from './wiki/category/industrial-ship/industrial-ship.component';
import { ExplorationShipComponent } from './wiki/category/exploration-ship/exploration-ship.component';
import { BuildingShipComponent } from './wiki/category/building-ship/building-ship.component';
import { IronCladeComponent } from './wiki/vaisseaux/iron-clade/iron-clade.component'; //test
import { ShipDetailsComponent } from './ship-details-component/ship-details-component.component'; //Page dynamique pour l'affichage des caractéristiques.
export const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'wikiShips', component: ShipsWikiComponent },
  { path: 'vaisseaux_transports', component: TradingShipComponent},
  { path: 'vaisseaux_courses', component: RaceShipComponent},
  { path: 'vaisseaux_militaires', component: MilitaryShipComponent},
  { path: 'vaisseaux_industriels', component: IndustrialShipComponent},
  { path: 'vaisseaux_explorations', component: ExplorationShipComponent},
  { path: 'vaisseaux_constructions', component: BuildingShipComponent},
  { path: 'Ironclade', component: IronCladeComponent},
  { path: 'ships/:id', component: ShipDetailsComponent }
];
