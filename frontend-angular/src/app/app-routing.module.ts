import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/cart/home/home.component';
import { ArticulesEditComponent } from './Components/articules-edit/articules-edit.component';
import { ArticulesComponent } from './Components/articules/articules.component';

const routes: Routes = [
  {path: 'article',component: ArticulesComponent},
  {path: 'article/edit/:id',component: ArticulesEditComponent},
  
 // {
   // path: 'upload',
    //component: UploadPageComponent,
    //canActivate: [VigilanteGuard]
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ArticulesComponent,ArticulesEditComponent]
