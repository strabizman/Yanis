import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

/*const routes: Routes = [
  { path: '', component: RegisterComponent }  // Gère la route relative dans le module RegisterModule
]; */

@NgModule({
  //imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

