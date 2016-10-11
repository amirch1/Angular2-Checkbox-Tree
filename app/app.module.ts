import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TreeModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [ BrowserModule, TreeModule, SharedModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
