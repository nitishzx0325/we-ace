import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HappyListComponent } from './happy-list/happy-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateHappyComponent } from './create-happy/create-happy.component';
@NgModule({
  declarations: [AppComponent, HappyListComponent, CreateHappyComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
