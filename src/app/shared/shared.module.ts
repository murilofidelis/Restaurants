import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {

}