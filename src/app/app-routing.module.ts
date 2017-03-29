import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellingComponent }   from './spelling.component';
import { AboutComponent }      from './about.component';

const routes: Routes = [
  { path: '', redirectTo: '/spelling', pathMatch: 'full' },
  { path: 'spelling',  component: SpellingComponent },
  { path: 'about',     component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
