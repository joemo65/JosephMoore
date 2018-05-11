import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';

import { ContentComponent } from './content.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

@NgModule({
    declarations: [
        ContentComponent,
        AboutComponent,
        SkillsComponent,
        WorkComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContentRoutingModule,
    ]
})
export class ContentModule {

}