import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsWikiComponent } from './ships-wiki.component';

const routes: Routes = [{ path: 'wikiShips', component: ShipsWikiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsWikiRoutingModule { }
