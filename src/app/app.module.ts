import { ItemService } from 'src/app/services/item.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateComponent } from './pages/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemFormComponent } from './components/item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    HomeComponent,
    ItemDetailComponent,
    DetailComponent,
    NavbarComponent,
    CreateComponent,
    ItemFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
