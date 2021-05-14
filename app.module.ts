import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import { AppRoutingModule } from './app-routing.module';

import {TextFieldModule} from '@angular/cdk/text-field';

import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ButtonComponent } from './button/button.component';
import { DividerComponent } from './divider/divider.component';
import { MaskComponent } from './mask/mask.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    HeaderComponent,
    TableComponent,
    FooterComponent,
    TimeComponent,
    DropDownComponent,
    SpinnerComponent,
    ButtonComponent,
    DividerComponent,
    MaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    CdkTableModule,
   
    TextFieldModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
 // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
