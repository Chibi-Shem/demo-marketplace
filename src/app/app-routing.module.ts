import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CreateComponent } from './pages/create/create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card', component: CreateComponent },
  { path: 'card/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
