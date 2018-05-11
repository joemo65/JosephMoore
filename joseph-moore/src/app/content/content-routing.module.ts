import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

const contentRoutes: Routes = [

      { path: '', redirectTo: '/about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'work', component: WorkComponent }

];

@NgModule({
  imports: [ RouterModule.forChild(contentRoutes) ],
  exports: [ RouterModule ]
})
export class ContentRoutingModule {
 }
