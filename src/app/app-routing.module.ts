import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'lista', component:  ListComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'crear-editar', component:  AddEditComponent},
  // { path: 'second-component', component: SecondComponent },
  { path: '**', component:  ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
