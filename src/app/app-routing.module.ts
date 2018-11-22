import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListHeroComponent} from './app/list-hero/list-hero.component';
import {HeroesComponent} from './app/heroes/heroes.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {VillainComponent} from './app/villain/villain.component';
import {ListVillainComponent} from './app/list-villain/list-villain.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'heroes', component: ListHeroComponent},
  {path: 'villains', component: ListVillainComponent},
  {path: 'heroes/:id', component: HeroesComponent},
  {path: 'villains/:id', component: VillainComponent},
  {path: 'dashboard', component: DashboardComponent},
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}

