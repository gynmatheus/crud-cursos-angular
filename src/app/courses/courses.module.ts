import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';





@NgModule({
    declarations: [
        CoursesComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        MatTableModule,
        MatCardModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        SharedModule
    ]
})
export class CoursesModule { }
