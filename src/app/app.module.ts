import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';

import { AppComponent }              from './app.component';
import { SpellingComponent }         from './spelling.component';
import { AboutComponent }            from './about.component';
import { SpellingIndicatorComponent} from './spelling-indicator.component'

import { AppRoutingModule }  from './app-routing.module';

import {SpellService}        from './spell.service';

@NgModule({
  imports:      [ BrowserModule
                  ,AppRoutingModule
                  ,FormsModule ],
  declarations: [
     AppComponent
    ,AboutComponent
    ,SpellingComponent
    ,SpellingIndicatorComponent
  ],
  providers:    [ SpellService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
