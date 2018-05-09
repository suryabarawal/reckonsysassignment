import { SearchPipe } from './pipes/search.pipe';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorControlMessageComponent } from './common/error-control-message/error-control-message.component';
@NgModule({
  declarations: [
      HeaderComponent,
      SearchPipe,
      ErrorControlMessageComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],
  exports: [
      HeaderComponent,
      SearchPipe,
      FormsModule,
      ReactiveFormsModule,
      ErrorControlMessageComponent
  ],
  providers: []
})
export class SharedModule { }
