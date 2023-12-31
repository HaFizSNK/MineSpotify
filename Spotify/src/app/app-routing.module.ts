import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'TopNav', component:TopNavComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
