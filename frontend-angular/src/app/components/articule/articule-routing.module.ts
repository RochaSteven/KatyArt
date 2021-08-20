import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [ { path: 'articule', redirectTo: 'articule/index', pathMatch: 'full'},
{ path: 'articule/index', component: IndexComponent },
{ path: 'articule/create', component: CreateComponent },
{ path: 'articule/edit/:idArticule', component: EditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuleRoutingModule { }
