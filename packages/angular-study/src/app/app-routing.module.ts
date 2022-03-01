import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { JWTGuard } from './jwt.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [JWTGuard], canActivateChild: [JWTGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [JWTGuard], canActivateChild: [JWTGuard] },
  { path: 'heroes', component: HeroesComponent, canActivate: [JWTGuard], canActivateChild: [JWTGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
