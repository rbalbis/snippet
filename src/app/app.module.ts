import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './Modifier_composent_parent_depuis_composent_enfant/parent/parent.component';
import { EnfantComponent } from './Modifier_composent_parent_depuis_composent_enfant/enfant/enfant.component';
import { RadioButtonComponent } from './Selection_Automatique_Radio_button_boolean/radio-button/radio-button.component';
import { RequeteComponent } from './Faire_Requette_Http/requete/requete.component';
import { MonComponentComponent } from './Creer_Son_Pipe/mon-component/mon-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantComponent,
    RadioButtonComponent,
    RequeteComponent,
    MonComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
