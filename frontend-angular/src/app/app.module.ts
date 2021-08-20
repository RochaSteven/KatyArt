import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticuleModule } from './components/articule/articule.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticulesEditComponent } from './Components/articules-edit/articules-edit.component';
import { ArticulesComponent } from './Components/articules/articules.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulesEditComponent,
    ArticulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticuleModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
