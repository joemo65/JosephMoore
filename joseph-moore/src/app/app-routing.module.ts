import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'content', loadChildren: './content/content.module#ContentModule'},
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
 }
