import { CreateHappyComponent } from './create-happy/create-happy.component';
import { HappyListComponent } from './happy-list/happy-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'happy', component: HappyListComponent },
  { path: 'create-happy', component: CreateHappyComponent },
  { path: '', redirectTo: 'happy', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
